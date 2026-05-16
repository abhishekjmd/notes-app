# Notes App 

A full-stack, end-to-end multi-user notes service application inspired by Google Keep and Apple Notes. It includes a robust REST API backend and a responsive, premium glassmorphism frontend.

## 🚀 Tech Stack

### Backend (Server)
- **Node.js & Express**: Fast and scalable HTTP REST API.
- **TypeScript**: Strict type-checking for better developer experience and reliability.
- **Prisma ORM**: Type-safe database access and schema management.
- **PostgreSQL**: Reliable relational database.
- **Zod**: Input schema validation.
- **JWT & bcrypt**: Secure stateless authentication and password hashing.
- **express-rate-limit**: IP-based rate limiting to protect authentication endpoints.

### Frontend (Client)
- **Next.js 16 (App Router)**: React framework with optimized routing.
- **React (Hooks, Context)**: UI components and state management.
- **Tailwind CSS**: Utility-first CSS framework (configured with custom design tokens for a premium dark theme).
- **Axios**: Configured with interceptors for seamless API communication and automatic JWT injection.
- **jwt-decode**: Client-side JWT parsing to identify the currently authenticated user.

---

## 🏗️ End-to-End Client-Server Integration

The frontend and backend are deeply integrated to provide a smooth, secure, and real-time user experience.

1. **Authentication Flow (`/login`, `/register`)**:
   - The user inputs their credentials on the client.
   - The client makes a `POST` request to the backend. The backend hashes passwords using `bcrypt` and issues a JSON Web Token (JWT) on success.
   - The client stores this `access_token` securely in `localStorage`.
   
2. **API Communication & Interceptors**:
   - The client uses a centralized `Axios` instance (`client/src/lib/api.ts`).
   - **Request Interceptor**: Automatically attaches the JWT to the `Authorization: Bearer <token>` header of every outgoing request.
   - **Response Interceptor**: Listens for `401 Unauthorized` responses. If a token expires or is invalid, the interceptor automatically logs the user out and redirects them to the login page.

3. **Client-Side Authorization & Permissions**:
   - The client uses `jwt-decode` to extract the `userId` from the stored token.
   - For every note rendered in the `NoteGrid`, the client checks if the `currentUserId` matches the note's `ownerId`.
   - **Action Buttons (Edit, Delete, Share)** are strictly conditionally rendered on the frontend only for notes the user owns. The backend provides secondary validation to enforce this securely at the database level.

4. **Real-time UX**:
   - All CRUD operations (Create, Edit, Delete, Pin, Share) hit the backend REST APIs.
   - The UI optimistically handles loading states (`SkeletonNote`) and automatically refetches the notes grid on success so changes appear instantly without a full page reload.
   - Pinned notes are sorted both by the backend API query (`orderBy: [{ isPinned: "desc" }]`) and managed flawlessly on the client.

---

## 🎯 Features & API Compliance

The application strictly adheres to the provided feature requirements:

| Feature | Endpoint | Description | Status |
|---------|----------|-------------|--------|
| **Register** | `POST /register` | Creates a new user with `email` and `password`. Returns 201. | ✅ |
| **Login** | `POST /login` | Authenticates user. Returns 200 with `access_token`. | ✅ |
| **Get All Notes** | `GET /notes` | Returns an array of notes accessible by the authenticated user. | ✅ |
| **Get Note by ID**| `GET /notes/:id` | Returns specific note details. Enforces ownership/shared access. | ✅ |
| **Create Note** | `POST /notes` | Creates a new note. Returns 201 with note details. | ✅ |
| **Update Note** | `PUT /notes/:id` | Updates `title`, `content`, or `isPinned` fields. | ✅ |
| **Delete Note** | `DELETE /notes/:id`| Soft deletes a note. Returns 204. | ✅ |
| **Share Note** | `POST /notes/:id/share` | Shares a note with a registered `email`. | ✅ |
| **OpenAPI Spec**| `GET /openapi.json`| Returns a Swagger v3 specification of the API. | ✅ |
| **About** | `GET /about` | Returns author details and custom feature descriptions. | ✅ |

### ✨ Custom "My Features" (Required Stretch)

To showcase product sense and engineering creativity, the following custom features were implemented beyond the basic requirements:

1. **Note Pinning (`isPinned`)**: Users can mark important notes. Pinned notes visually jump to the top of the grid and feature a distinct UI gradient strip. Chosen because priority management is a core UX need for any notes app.
2. **Soft Delete (`isDeleted`)**: Instead of permanently destroying data, notes are flagged as `isDeleted`. This aligns with enterprise practices (like Google Keep's "Trash" bin) allowing future recovery.
3. **Full-Text Search (`GET /search?q=keyword`)**: Implemented a dedicated search endpoint with debounced client-side inputs (500ms). Case-insensitive search checks both `title` and `content`.
4. **Tagging System**: User-scoped tags can be attached to notes (`POST /notes/:id/tags`) for better organization and filtering (`GET /notes?tag=work`).

---

## ⚙️ How to Run Locally

### Prerequisites
- Node.js (v18+)
- PostgreSQL (Local or managed like Supabase/Neon)

### 1. Backend Setup
```bash
cd server
npm install

# Setup your .env file
echo 'DATABASE_URL="postgresql://user:password@localhost:5432/notesdb"' > .env
echo 'JWT_SECRET="your_super_secret_key"' >> .env

# Run Prisma migrations
npx prisma migrate dev --name init

# Start the server (runs on http://localhost:5000)
npm run dev
```

### 2. Frontend Setup
```bash
cd client
npm install

# Setup your .env.local file
echo 'NEXT_PUBLIC_API_URL=http://localhost:5000' > .env.local

# Start the Next.js client (runs on http://localhost:3000)
npm run dev
```

## 🌐 Deployment
- **Frontend App**: [https://notes-app-ten-murex.vercel.app/](https://notes-app-ten-murex.vercel.app/)
- **Backend API Base URL**: [https://notes-app-2846.onrender.com](https://notes-app-2846.onrender.com)
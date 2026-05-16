import { Router, Request, Response } from "express";

const router = Router();

const openApiSpec = {
  openapi: "3.0.0",
  info: {
    title: "Notes App API",
    version: "1.0.0",
    description: "A secure and feature-rich note-taking application backend.",
  },
  servers: [
    {
      url: "/api",
      description: "Base API path",
    },
  ],
  components: {
    securitySchemes: {
      BearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
    schemas: {
      Note: {
        type: "object",
        properties: {
          id: { type: "string", format: "uuid" },
          title: { type: "string" },
          content: { type: "string" },
          isPinned: { type: "boolean" },
          isDeleted: { type: "boolean" },
          ownerId: { type: "string" },
          createdAt: { type: "string", format: "date-time" },
          updatedAt: { type: "string", format: "date-time" },
        },
      },
      Error: {
        type: "object",
        properties: {
          message: { type: "string" },
        },
      },
    },
  },
  paths: {
    "/auth/register": {
      post: {
        summary: "Register a new user",
        tags: ["Auth"],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  email: { type: "string", format: "email" },
                  password: { type: "string", minLength: 6 },
                },
                required: ["email", "password"],
              },
            },
          },
        },
        responses: {
          201: { description: "User registered successfully" },
          400: { description: "Invalid input or email already exists" },
        },
      },
    },
    "/auth/login": {
      post: {
        summary: "Login a user",
        tags: ["Auth"],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  email: { type: "string", format: "email" },
                  password: { type: "string" },
                },
                required: ["email", "password"],
              },
            },
          },
        },
        responses: {
          200: {
            description: "Login successful",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    token: { type: "string" },
                    user: {
                      type: "object",
                      properties: {
                        id: { type: "string" },
                        email: { type: "string" },
                      },
                    },
                  },
                },
              },
            },
          },
          401: { description: "Invalid credentials" },
        },
      },
    },
    "/notes": {
      get: {
        summary: "Get all notes (paginated)",
        tags: ["Notes"],
        security: [{ BearerAuth: [] }],
        parameters: [
          { name: "page", in: "query", schema: { type: "integer", default: 1 } },
          { name: "limit", in: "query", schema: { type: "integer", default: 10 } },
          { name: "tag", in: "query", schema: { type: "string" } },
        ],
        responses: {
          200: {
            description: "List of notes",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    data: { type: "array", items: { $ref: "#/components/schemas/Note" } },
                    total: { type: "integer" },
                    page: { type: "integer" },
                    limit: { type: "integer" },
                  },
                },
              },
            },
          },
        },
      },
      post: {
        summary: "Create a new note",
        tags: ["Notes"],
        security: [{ BearerAuth: [] }],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  title: { type: "string" },
                  content: { type: "string" },
                  isPinned: { type: "boolean" },
                },
                required: ["title"],
              },
            },
          },
        },
        responses: {
          201: {
            description: "Note created",
            content: { "application/json": { schema: { $ref: "#/components/schemas/Note" } } },
          },
        },
      },
    },
    "/notes/{id}": {
      get: {
        summary: "Get a specific note by ID",
        tags: ["Notes"],
        security: [{ BearerAuth: [] }],
        parameters: [{ name: "id", in: "path", required: true, schema: { type: "string" } }],
        responses: {
          200: {
            description: "Note details",
            content: { "application/json": { schema: { $ref: "#/components/schemas/Note" } } },
          },
          404: { description: "Note not found" },
        },
      },
      patch: {
        summary: "Update a note",
        tags: ["Notes"],
        security: [{ BearerAuth: [] }],
        parameters: [{ name: "id", in: "path", required: true, schema: { type: "string" } }],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  title: { type: "string" },
                  content: { type: "string" },
                  isPinned: { type: "boolean" },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "Note updated",
            content: { "application/json": { schema: { $ref: "#/components/schemas/Note" } } },
          },
        },
      },
      delete: {
        summary: "Soft-delete a note",
        tags: ["Notes"],
        security: [{ BearerAuth: [] }],
        parameters: [{ name: "id", in: "path", required: true, schema: { type: "string" } }],
        responses: {
          204: { description: "Note deleted" },
        },
      },
    },
    "/notes/{id}/share": {
      post: {
        summary: "Share a note with another user",
        tags: ["Notes"],
        security: [{ BearerAuth: [] }],
        parameters: [{ name: "id", in: "path", required: true, schema: { type: "string" } }],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  share_with_email: { type: "string", format: "email" },
                },
                required: ["share_with_email"],
              },
            },
          },
        },
        responses: {
          200: { description: "Note shared successfully" },
        },
      },
    },
    "/tags": {
      get: {
        summary: "Get all tags for the user",
        tags: ["Tags"],
        security: [{ BearerAuth: [] }],
        responses: {
          200: {
            description: "List of tags",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      id: { type: "string" },
                      name: { type: "string" },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    "/search": {
      get: {
        summary: "Search notes by title or content",
        tags: ["Search"],
        security: [{ BearerAuth: [] }],
        parameters: [
          { name: "q", in: "query", required: true, schema: { type: "string" } },
          { name: "page", in: "query", schema: { type: "integer" } },
          { name: "limit", in: "query", schema: { type: "integer" } },
        ],
        responses: {
          200: {
            description: "Search results",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    data: { type: "array", items: { $ref: "#/components/schemas/Note" } },
                    total: { type: "integer" },
                  },
                },
              },
            },
          },
        },
      },
    },
    "/health": {
      get: {
        summary: "Health check",
        responses: {
          200: {
            description: "Server is healthy",
            content: { "application/json": { schema: { type: "object", properties: { status: { type: "string" } } } } },
          },
        },
      },
    },
    "/about": {
      get: {
        summary: "About the developer and features",
        responses: {
          200: { description: "About information" },
        },
      },
    },
    "/openapi.json": {
      get: {
        summary: "OpenAPI Specification",
        responses: {
          200: { description: "OpenAPI JSON" },
        },
      },
    },
  },
};

router.get("/about", (req: Request, res: Response) => {
  res.json({
    name: "Abhishek",
    email: "your@email.com",
    my_features: {
      note_pinning: "Mark important notes to keep them at the top of the list.",
      soft_delete: "Notes are flagged as deleted instead of being immediately removed, allowing for data recovery.",
      tagging: "User-scoped categorization system for organizing and filtering notes.",
      full_text_search: "Case-insensitive search across note titles and content for efficient discovery.",
      rate_limiting: "IP-based request limiting on authentication endpoints to prevent brute-force attacks.",
    },
  });
});

router.get("/openapi.json", (req: Request, res: Response) => {
  res.json(openApiSpec);
});

export default router;

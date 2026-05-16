import { Router } from "express";
import type { Request, Response } from "express";

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
      url: "/",
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
          created_at: { type: "string", format: "date-time" },
          updated_at: { type: "string", format: "date-time" },
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
    "/register": {
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
          201: { 
            description: "User registered successfully",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: { message: { type: "string" } }
                }
              }
            }
          },
          400: { description: "Invalid input or email already exists" },
        },
      },
    },
    "/login": {
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
                    access_token: { type: "string" },
                  },
                },
              },
            },
          },
          401: { description: "Invalid email or password" },
        },
      },
    },
    "/notes": {
      get: {
        summary: "Get all notes",
        tags: ["Notes"],
        security: [{ BearerAuth: [] }],
        parameters: [
          { name: "page", in: "query", schema: { type: "integer", default: 1 } },
          { name: "limit", in: "query", schema: { type: "integer", default: 10 } },
          { name: "tag", in: "query", schema: { type: "string" } },
        ],
        responses: {
          200: {
            description: "Array of notes",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: { $ref: "#/components/schemas/Note" }
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
          403: { description: "Access denied" },
        },
      },
      put: {
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
          204: { description: "No Content" },
          403: { description: "Only owners can delete" },
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
          200: { 
            description: "Note shared successfully",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: { message: { type: "string" } }
                }
              }
            }
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
        ],
        responses: {
          200: {
            description: "Search results",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: { $ref: "#/components/schemas/Note" }
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
    "my features": {
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

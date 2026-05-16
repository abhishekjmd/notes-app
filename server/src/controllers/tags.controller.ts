import type { Request, Response } from "express";
import { z } from "zod";
import { prisma } from "../utils/prismaClient.js";

const tagSchema = z.object({
  name: z.string().min(1, "Tag name is required"),
});

const attachTagSchema = z.object({
  tag_id: z.string().min(1, "Tag ID is required"),
});

export const createTag = async (req: Request, res: Response) => {
  try {
    const userId = req.user!.userId;
    const { name } = tagSchema.parse(req.body);

    const existingTag = await prisma.tag.findUnique({
      where: {
        name_userId: {
          name,
          userId,
        },
      },
    });

    if (existingTag) {
      return res.status(409).json({ message: "Tag already exists" });
    }

    const tag = await prisma.tag.create({
      data: {
        name,
        userId,
      },
    });

    return res.status(201).json(tag);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ message: error.errors[0].message });
    }
    console.error("Create tag error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getTags = async (req: Request, res: Response) => {
  try {
    const userId = req.user!.userId;
    const tags = await prisma.tag.findMany({
      where: { userId },
      orderBy: { name: "asc" },
    });

    return res.status(200).json(tags);
  } catch (error) {
    console.error("Get tags error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const attachTagToNote = async (req: Request, res: Response) => {
  try {
    const { id: noteId } = req.params;
    const userId = req.user!.userId;
    const { tag_id } = attachTagSchema.parse(req.body);

    // Verify note ownership
    const note = await prisma.note.findUnique({
      where: { id: noteId },
    });

    if (!note || note.ownerId !== userId) {
      return res.status(403).json({ message: "You can only tag your own notes" });
    }

    // Verify tag ownership
    const tag = await prisma.tag.findUnique({
      where: { id: tag_id },
    });

    if (!tag || tag.userId !== userId) {
      return res.status(403).json({ message: "You can only use your own tags" });
    }

    // Check if already attached
    const existingRelation = await prisma.noteTag.findUnique({
      where: {
        noteId_tagId: {
          noteId,
          tagId: tag_id,
        },
      },
    });

    if (existingRelation) {
      return res.status(400).json({ message: "Tag already attached to this note" });
    }

    await prisma.noteTag.create({
      data: {
        noteId,
        tagId: tag_id,
      },
    });

    return res.status(200).json({ message: "Tag attached successfully" });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ message: error.errors[0].message });
    }
    console.error("Attach tag error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const removeTagFromNote = async (req: Request, res: Response) => {
  try {
    const { id: noteId, tagId } = req.params;
    const userId = req.user!.userId;

    // Verify note ownership
    const note = await prisma.note.findUnique({
      where: { id: noteId },
    });

    if (!note || note.ownerId !== userId) {
      return res.status(403).json({ message: "You can only manage tags on your own notes" });
    }

    await prisma.noteTag.delete({
      where: {
        noteId_tagId: {
          noteId,
          tagId: tagId as string,
        },
      },
    });

    return res.status(204).send();
  } catch (error) {
    console.error("Remove tag error:", error);
    // If record not found, still return 204 or 404
    return res.status(204).send();
  }
};

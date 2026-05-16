import { Request, Response } from "express";
import { z } from "zod";
import { prisma } from "../lib/prisma";
import { handlePrismaError } from "../utils/prismaErrors";

const noteSchema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().optional().default(""),
  isPinned: z.boolean().optional().default(false),
});

const updateNoteSchema = z.object({
  title: z.string().min(1).optional(),
  content: z.string().optional(),
  isPinned: z.boolean().optional(),
});

const shareSchema = z.object({
  share_with_email: z.string().email(),
});

export const getNotes = async (req: Request, res: Response) => {
  try {
    const userId = req.user!.userId;
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const tag = req.query.tag as string;
    const skip = (page - 1) * limit;

    const whereClause: any = {
      OR: [
        { ownerId: userId },
        { sharedWith: { some: { sharedWithUserId: userId } } },
      ],
      isDeleted: false,
    };

    if (tag) {
      whereClause.tags = {
        some: {
          tag: {
            name: tag,
          },
        },
      };
    }

    const [notes, total] = await Promise.all([
      prisma.note.findMany({
        where: whereClause,
        orderBy: [
          { isPinned: "desc" },
          { createdAt: "desc" },
        ],
        skip,
        take: limit,
      }),
      prisma.note.count({ where: whereClause }),
    ]);

    return res.status(200).json({
      data: notes,
      total,
      page,
      limit,
    });
  } catch (error) {
    return handlePrismaError(error, res);
  }
};

export const getNoteById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userId = req.user!.userId;

    const note = await prisma.note.findFirst({
      where: {
        id,
        OR: [
          { ownerId: userId },
          { sharedWith: { some: { sharedWithUserId: userId } } },
        ],
        isDeleted: false,
      },
    });

    if (!note) {
      // Check if note exists at all to differentiate between 404 and 403
      const exists = await prisma.note.findUnique({ where: { id } });
      if (!exists) return res.status(404).json({ message: "Note not found" });
      return res.status(403).json({ message: "Access denied" });
    }

    return res.status(200).json(note);
  } catch (error) {
    return handlePrismaError(error, res);
  }
};

export const createNote = async (req: Request, res: Response) => {
  try {
    const userId = req.user!.userId;
    const { title, content, isPinned } = noteSchema.parse(req.body);

    const note = await prisma.note.create({
      data: {
        title,
        content,
        isPinned,
        ownerId: userId,
      },
    });

    return res.status(201).json(note);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ message: error.errors[0].message });
    }
    return handlePrismaError(error, res);
  }
};

export const updateNote = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userId = req.user!.userId;
    const data = updateNoteSchema.parse(req.body);

    const note = await prisma.note.findUnique({
      where: { id },
    });

    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    if (note.ownerId !== userId) {
      return res.status(403).json({ message: "Only owners can update notes" });
    }

    const updatedNote = await prisma.note.update({
      where: { id },
      data,
    });

    return res.status(200).json(updatedNote);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ message: error.errors[0].message });
    }
    return handlePrismaError(error, res);
  }
};

export const deleteNote = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userId = req.user!.userId;

    const note = await prisma.note.findUnique({
      where: { id },
    });

    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    if (note.ownerId !== userId) {
      return res.status(403).json({ message: "Only owners can delete notes" });
    }

    await prisma.note.update({
      where: { id },
      data: { isDeleted: true },
    });

    return res.status(204).send();
  } catch (error) {
    return handlePrismaError(error, res);
  }
};

export const shareNote = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userId = req.user!.userId;
    const { share_with_email } = shareSchema.parse(req.body);

    const note = await prisma.note.findUnique({
      where: { id },
    });

    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    if (note.ownerId !== userId) {
      return res.status(403).json({ message: "Only owners can share notes" });
    }

    const targetUser = await prisma.user.findUnique({
      where: { email: share_with_email },
    });

    if (!targetUser) {
      return res.status(404).json({ message: "Target user not found" });
    }

    if (targetUser.id === userId) {
      return res.status(400).json({ message: "Cannot share a note with yourself" });
    }

    const existingShare = await prisma.noteShare.findUnique({
      where: {
        noteId_sharedWithUserId: {
          noteId: id,
          sharedWithUserId: targetUser.id,
        },
      },
    });

    if (existingShare) {
      return res.status(400).json({ message: "Note already shared with this user" });
    }

    await prisma.noteShare.create({
      data: {
        noteId: id,
        sharedWithUserId: targetUser.id,
      },
    });

    return res.status(200).json({ message: "Note shared successfully" });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ message: error.errors[0].message });
    }
    return handlePrismaError(error, res);
  }
};

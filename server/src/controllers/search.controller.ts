import type { Request, Response } from "express";
import { prisma } from "../utils/prismaClient.js";

const formatNote = (note: any) => {
  const { createdAt, updatedAt, ...rest } = note;
  return {
    ...rest,
    created_at: createdAt,
    updated_at: updatedAt,
  };
};

export const searchNotes = async (req: Request, res: Response) => {
  try {
    const userId = req.user!.userId;
    const q = req.query.q as string;

    if (!q || q.trim() === "") {
      return res.status(400).json({ message: "Search query 'q' is required and cannot be empty" });
    }

    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const skip = (page - 1) * limit;

    const whereClause = {
      isDeleted: false,
      OR: [
        { ownerId: userId },
        { sharedWith: { some: { sharedWithUserId: userId } } },
      ],
      AND: [
        {
          OR: [
            { title: { contains: q, mode: "insensitive" as const } },
            { content: { contains: q, mode: "insensitive" as const } },
          ],
        },
      ],
    };

    const [notes] = await Promise.all([
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

    return res.status(200).json(notes.map(formatNote));
  } catch (error) {
    console.error("Search notes error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

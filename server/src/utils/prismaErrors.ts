import { Response } from "express";
import { Prisma } from "../generated/prisma";

export const handlePrismaError = (error: any, res: Response) => {
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    switch (error.code) {
      case "P2002": // Unique constraint failed
        const target = (error.meta?.target as string[])?.join(", ") || "field";
        return res.status(409).json({ message: `Unique constraint failed on ${target}` });
      case "P2025": // Record not found
        return res.status(404).json({ message: "Record not found" });
      default:
        return res.status(500).json({ message: "Database operation failed" });
    }
  }
  
  console.error("Database error:", error);
  return res.status(500).json({ message: "Internal server error" });
};

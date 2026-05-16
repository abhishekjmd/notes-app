import type { Request, Response, NextFunction } from "express";

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error("Unhandled error:", err);

  const status = err.status || 500;
  const message = err.message || "Internal server error";

  return res.status(status).json({
    message: status === 500 ? "Internal server error" : message,
  });
};

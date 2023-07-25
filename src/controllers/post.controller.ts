import { Request, Response } from "express";
import prisma from "../utils/connectDB";

export const createPost = async (req: Request, res: Response) => {
  const { slug, title, body, userId } = req.body;

  if (!slug || !title || !body) {
    res.status(400).send("Please enter all fields");
  }
  const user = await prisma.post.create({
    data: {
      slug,
      title,
      body,
      authorId: userId,
    },
  });
  res.status(201).send(user);

  try {
  } catch (error) {
    res.status(500).send(error);
  }
};

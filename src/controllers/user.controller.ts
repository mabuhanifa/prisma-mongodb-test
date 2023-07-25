import { Request, Response } from "express";
import prisma from "../utils/connectDB";

export const registerUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400).send("Please enter all fields");
  }
  const user = await prisma.user.create({
    data: {
      email,
      name,
      password,
    },
  });
  res.status(201).send(user);

  try {
  } catch (error) {
    res.status(500).send(error);
  }
};

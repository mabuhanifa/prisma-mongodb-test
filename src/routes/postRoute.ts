import { Router } from "express";
import { createPost, getAllPosts } from "../controllers/post.controller";

const router = Router();

router.route("/").post(createPost).get(getAllPosts);

export default router;

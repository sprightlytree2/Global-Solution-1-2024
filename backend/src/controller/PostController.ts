import { AppDataSource } from "../data-source";
import { Post } from "../entity/Post";

import { Request, Response } from "express";

const postRepository = AppDataSource.getRepository(Post);
export const getPosts = async (request: Request, response: Response) => {
    const posts = await postRepository.find();
    return response.json(posts);
}

export const postPost = async (request: Request, response: Response) => {
    const newPost = postRepository.create(request.body);
    const savedPost = await postRepository.save(newPost);

    var post = savedPost;

    return response.json(post);
}
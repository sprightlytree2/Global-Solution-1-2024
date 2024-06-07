import { AppDataSource } from "../data-source";
import { Post } from "../entity/Post";
import { PostDto } from "../Dtos/PostDto";
import { plainToInstance } from 'class-transformer';

import { Request, Response } from "express";

const postRepository = AppDataSource.getRepository(Post);

export const getPosts = async (request: Request, response: Response) => {
    const posts = await postRepository.find();
    return response.json(posts);
}

export const postPost = async (request: Request, response: Response) => {

    const postDto = plainToInstance(PostDto, request.body as object)
    const locations = postDto.location.split("/");

    const newPost = postRepository.create({
        nome_pessoa: postDto.nome_pessoa,
        comentario: postDto.comentario,
        coordenada: locations[0],
        endereco: locations[1]
    })

    const savedPost = await postRepository.save(newPost);

    return response.json(savedPost);
}
import { Router, Request, Response } from "express";

import { getPosts, postPost } from "./controller/PostController";

const routes = Router();

routes.get("/home", (request: Request, response: Response) => {
    return response.json({message: "Hello turma!"})
});

routes.get("/posts", getPosts);
routes.post("/posts", postPost);

export default routes;
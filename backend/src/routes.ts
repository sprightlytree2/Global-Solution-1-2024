import { Router, request, response, Request, Response } from "express";

import { getPosts } from "./controller/PostController";

const routes = Router();

routes.get("/home", (request: Request, response: Response) => {
    return response.json({message: "Hello turma!"})
});

routes.get("/posts", getPosts);
/*
routes.post("/items", postItems);
routes.get("/items/:id", getItem);
routes.put("/items/:id", updateItem);
routes.delete("/items/:id", deleteItem);
*/
export default routes;
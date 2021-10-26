import { Router } from "express";
import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { UserRepository } from "../repositories/user.repository";


const usersRouter = Router();

usersRouter.get("/users", async (req: Request, res: Response, next: NextFunction) => {

    let repository = new UserRepository()
    let result = await repository.findAll();

    res.status(StatusCodes.OK).json(result);
});

usersRouter.get("/users/:uuid", async (req: Request, res: Response, next: NextFunction) => {
    const _id = req.params.uuid;

    let repository = new UserRepository()
    let result = await repository.findOne(_id);

    res.status(StatusCodes.OK).json(result);
});

usersRouter.post("/users", async (req: Request, res: Response, next: NextFunction) => {
    const user = req.body;

    let repository = new UserRepository()
    let result = await repository.insert(user);

    res.status(StatusCodes.OK).json(result);
});

usersRouter.put("/users/:id", async (req: Request, res: Response, next: NextFunction) => {
    let user = req.body;
    user._id = req.params.id;    

    let repository = new UserRepository()
    let result = await repository.update(user)

    res.status(StatusCodes.OK).json(result);
});

usersRouter.patch("/users/:id", async (req: Request, res: Response, next: NextFunction) => {
    let user = req.body;
    user._id = req.params.id;    

    let repository = new UserRepository()
    let result = await repository.update(user);

    res.status(StatusCodes.OK).json(result);
});

usersRouter.delete("/users/:id", async (req: Request, res: Response, next: NextFunction) => {
    let _id = req.params.uuid;

    let repository = new UserRepository()
    let user = await repository.findOne(_id);
    let result = await repository.delete(_id);

    res.status(StatusCodes.OK).json(user);
});

export { usersRouter };
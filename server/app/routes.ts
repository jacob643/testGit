import { injectable, inject } from "inversify";
import { Router, Request, Response, NextFunction } from "express";

import Types from "./types";
import { Route } from "./routes/index";
import { UserController } from "./routes/userController";

@injectable()
export class Routes {

    public constructor(@inject(Types.Index) private index: Route.Index, @inject(Types.Users) private users: UserController.Users) { }

    public get routes(): Router {
        const router: Router = Router();

        router.get("/",
            (req: Request, res: Response, next: NextFunction) => this.index.helloWorld(req, res, next));

        router.get("/users",
            (req: Request, res: Response, next: NextFunction) => this.users.get(req, res, next));

        router.post("/users",
            (req: Request, res: Response, next: NextFunction) => this.users.post(req, res, next));

        return router;
    }
}

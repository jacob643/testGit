import { injectable, inject } from "inversify";
import { Router, Request, Response, NextFunction } from "express";

import Types from "./types";
import { Route } from "./routes/index";
import { UserController } from "./routes/userController";
import { GameController } from "./routes/gameController";

@injectable()
export class Routes {

    public constructor(
        @inject(Types.Index) private index: Route.Index,
        @inject(Types.Users) private users: UserController.Users,
        @inject(Types.Games) private games: GameController.Games) { }
    public get routes(): Router {
        const router: Router = Router();

        router.get("/",
            (req: Request, res: Response, next: NextFunction) => this.index.helloWorld(req, res, next));
        // Game Controller
        router.get("/games",
            (req: Request, res: Response, next: NextFunction) => this.games.getGames(req, res, next));
        router.post("/games",
            (req: Request, res: Response, next: NextFunction) => this.games.postGames(req, res, next));
        router.get("/games/:value",
            (req: Request, res: Response, next: NextFunction) => this.games.getGamesView(req, res, next));
        router.get("/games/id/:id",
            (req: Request, res: Response, next: NextFunction) => this.games.getGamesId(req, res, next));
        // User Controller
        router.get("/users",
            (req: Request, res: Response, next: NextFunction) => this.users.getUsers(req, res, next));
        router.post("/users",
            (req: Request, res: Response, next: NextFunction) => this.users.post(req, res, next));
        router.get("/users/:name",
            (req: Request, res: Response, next: NextFunction) => this.users.getUser(req, res, next));
        router.delete("users",
            (req: Request, res: Response, next: NextFunction) => this.users.deleteUser(req, res, next));

        return router;
    }
}

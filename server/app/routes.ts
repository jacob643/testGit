import { injectable, inject } from "inversify";
import { Router, Request, Response, NextFunction } from "express";

import Types from "./types";
import { Route } from "./routes/index";

@injectable()
export class Routes {

    public constructor(@inject(Types.Index) private index: Route.Index) { }

    public get routes(): Router {
        const router: Router = Router();

        router.get("/",
            (req: Request, res: Response, next: NextFunction) => this.index.helloWorld(req, res, next));
        router.get("/games",
            (req: Request, res: Response, next: NextFunction) => this.index.showGames(req, res, next));
        router.post("/games",
            (req: Request, res: Response, next: NextFunction) => this.index.postGames(req, res, next));
        router.get("/games/singleView",
            (req: Request, res: Response, next: NextFunction) => this.index.getSingleViewGame(req, res, next));
        router.get("/games/doubleView",
            (req: Request, res: Response, next: NextFunction) => this.index.getDoubleViewGame(req, res, next));
        return router;
    }
}

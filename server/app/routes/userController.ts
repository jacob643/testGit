import { Request, Response, NextFunction } from "express";
import { User } from "../../../common/user/user";
import "reflect-metadata";
import { injectable, } from "inversify";

export module UserController {

    @injectable()
    export class Users {
        users: User[];

        public get(req: Request, res: Response, next: NextFunction): void {
            res.send(JSON.stringify(this.users));
        }
    }
}

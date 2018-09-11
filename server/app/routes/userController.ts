import { Request, Response, NextFunction } from "express";
import { User } from "../../../common/user/user";
import "reflect-metadata";
import { injectable, } from "inversify";

export module UserController {

    @injectable()
    export class Users {
        public users = new Array<User>();
        public newUser: User;

        public get(req: Request, res: Response, next: NextFunction): void {
            res.send(JSON.stringify(this.users));
        }

        public post(req: Request, res: Response, next: NextFunction): void {
            this.users.push(req.body.user);
            res.send(JSON.stringify(this.users));
        }
    }
}

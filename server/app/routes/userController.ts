import { Request, Response, NextFunction } from "express";
import { User } from "../../../common/user/user";
import "reflect-metadata";
import { injectable, } from "inversify";

export module UserController {

    const REGEXP_USERNAME = /^[a-zA-Z0-9]{4,10}$/

    @injectable()
    export class Users {
        public users = new Array<User>();
        public newUser: User;

        public getUsers(req: Request, res: Response, next: NextFunction): void {
            res.send(JSON.stringify(this.users));
        }

        public post(req: Request, res: Response, next: NextFunction): void {
            let user = req.body.user
            if (REGEXP_USERNAME.test(user.name)) {
                this.users.push(user);
            }
            res.send(JSON.stringify(user));
        }
    }
}

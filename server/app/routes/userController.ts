import { Request, Response, NextFunction } from "express";
import { User, createUser } from "../../../common/user/user";
import "reflect-metadata";
import { injectable, } from "inversify";

export module UserController {

    const REGEXP_USERNAME = /^[a-zA-Z0-9]{4,10}$/

    @injectable()
    export class Users {
        public users = new Array<User>();

        public getUsers(req: Request, res: Response, next: NextFunction): void {
            res.send(JSON.stringify(this.users));
        }

        public post(req: Request, res: Response, next: NextFunction): void {
            let name = req.body.name;
            if (!REGEXP_USERNAME.test(name)) {
                res.status(500);
                throw new Error("Alphanumeric only, 4-10 characters");
            }
            if(this.users.find((e)=>{return e.name == name})) {
                res.status(500);
                throw new Error("Name already taken.");
            }
            let newUser = createUser(name);
            this.users.push(newUser);
            res.send(JSON.stringify(newUser));
        }

        public getUser(req: Request, res: Response, next: NextFunction): void {
            let name: string = req.param.name;
            res.send(JSON.stringify(this.users.find((e) => { return e.name == name })));
        }
    }
}

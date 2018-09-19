import { Request, Response, NextFunction } from "express";
import { Message } from "../../../common/communication/message";
import "reflect-metadata";
import { injectable, } from "inversify";

export module Route {

    @injectable()
    export class Index {

        public helloWorld(_req: Request, res: Response, _next: NextFunction): void {
            const message: Message = {
                title: "Hello",
                body: "World"
            };
            res.send(JSON.stringify(message));
        }
    }
}

import { Request, Response, NextFunction } from "express";
import { Message } from "../../../common/communication/message";
import "reflect-metadata";
import { injectable, } from "inversify";
import { MongoClient } from "mongodb";

export module Route {

    @injectable()
    export class Index {

        public helloWorld(req: Request, res: Response, next: NextFunction): void {
            const message: Message = {
                title: "Hello",
                body: "World"
            };
            res.send(JSON.stringify(message));
        }

        public showGames(req: Request, res: Response, next: NextFunction): void {
            var DB_URL: string = "mongodb://admin:npm2018*@ds157742.mlab.com:57742/npmdb";
            MongoClient.connect(DB_URL, { useNewUrlParser: true }, (err, db) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Connected to our mongoDB!");

                    //show games
                    var games = db.db("npmdb").collection("games");
                    games.find().toArray(function(_err: any, docs: any) {
                        res.send(JSON.stringify(docs));
                    });
                }
            });
        }
    }
}

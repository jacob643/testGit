import { Request, Response, NextFunction } from "express";
import { Message } from "../../../common/communication/message";
import "reflect-metadata";
import { injectable, } from "inversify";
import { MongoClient } from "mongodb";
import { Game, createGame } from "../../../common/game/game";
import { ScoreBoard, createScoreBoard } from '../../../common/game/scoreBoard';

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

        public showGames(_req: Request, res: Response, _next: NextFunction): void {
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
        public postGames(req: Request, res: Response, _next: NextFunction): void {
            var DB_URL: string = "mongodb://admin:npm2018*@ds157742.mlab.com:57742/npmdb";
            MongoClient.connect(DB_URL, { useNewUrlParser: true }, (err, db) => {
                console.log(req.body.name);
                if (err) {
                    console.log(err);
                } else {
                    console.log("Connected to our mongoDB!");
                    var scoreBoard: ScoreBoard = createScoreBoard();
                    var game: Game = createGame(1, req.body.name, scoreBoard, scoreBoard, "", true);
                    //post games
                    db.db("npmdb").collection("games").insertOne(game, function(error, _res) {
                        if (error) throw error;
                        console.log("inserted game!");
                    });
                    res.send(JSON.stringify(game));
                }
            });
        }
        public getSingleViewGame(_req: Request, res: Response, _next: NextFunction): void {
            var DB_URL: string = "mongodb://admin:npm2018*@ds157742.mlab.com:57742/npmdb";
            MongoClient.connect(DB_URL, { useNewUrlParser: true }, (err, db) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Connected to our mongoDB!");

                    //show games
                    var games = db.db("npmdb").collection("games");
                    games.find({ singleView: true }).toArray(function(_err: any, docs: any) {
                        res.send(JSON.stringify(docs));
                    });
                }
            });

        }
        public getDoubleViewGame(_req: Request, res: Response, _next: NextFunction): void {
            var DB_URL: string = "mongodb://admin:npm2018*@ds157742.mlab.com:57742/npmdb";
            MongoClient.connect(DB_URL, { useNewUrlParser: true }, (err, db) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Connected to our mongoDB!");

                    //show games
                    var games = db.db("npmdb").collection("games");
                    games.find({ singleView: false }).toArray(function(_err: any, docs: any) {
                        res.send(JSON.stringify(docs));
                    });
                }
            });

        }
        public getGameById(_req: Request, res: Response, _next: NextFunction): void {
            var DB_URL: string = "mongodb://admin:npm2018*@ds157742.mlab.com:57742/npmdb";
            MongoClient.connect(DB_URL, { useNewUrlParser: true }, (err, db) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Connected to our mongoDB!");

                    let idNumber = parseInt(_req.params.id);
                    let games = db.db("npmdb").collection("games");
                    games.findOne({ id: idNumber }).then(
                      docs => res.send(JSON.stringify(docs))
                    );
                }
            });
        }
    }
}

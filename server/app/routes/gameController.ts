import { Request, Response, NextFunction } from "express";
import { MongoClient } from "mongodb";
import { Game, createGame } from "../../../common/game/game";
import { ScoreBoard, createScoreBoard } from '../../../common/game/scoreBoard';
import "reflect-metadata";
import { injectable, } from "inversify";

export module GameController {

    const DB_URL: string = "mongodb://admin:npm2018*@ds157742.mlab.com:57742/npmdb";

    @injectable()
    export class Games {
        public showGames(_req: Request, res: Response, _next: NextFunction): void {
            MongoClient.connect(DB_URL, { useNewUrlParser: true }, (err: Error, db: any) => {
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
            MongoClient.connect(DB_URL, { useNewUrlParser: true }, (err: Error, db: any) => {
                console.log(req.body.name);
                if (err) {
                    console.log(err);
                } else {
                    console.log("Connected to our mongoDB!");
                    var scoreBoard: ScoreBoard = createScoreBoard();
                    var game: Game = createGame(1, req.body.name, scoreBoard, scoreBoard, "", true);
                    //post games
                    db.db("npmdb").collection("games").insertOne(game, function(error: Error, _res: any) {
                        if (error) throw error;
                        console.log("inserted game!");
                    });
                    res.send(JSON.stringify(game));
                }
            });
        }
        public getSingleViewGame(_req: Request, res: Response, _next: NextFunction): void {
            MongoClient.connect(DB_URL, { useNewUrlParser: true }, (err: Error, db: any) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Connected to our mongoDB!");

                    //show games
                    var games = db.db("npmdb").collection("games");
                    games.find({ singleView: true }).toArray(function(_err: Error, docs: any) {
                        res.send(JSON.stringify(docs));
                    });
                }
            });

        }
        public getDoubleViewGame(_req: Request, res: Response, _next: NextFunction): void {
            MongoClient.connect(DB_URL, { useNewUrlParser: true }, (err: Error, db: any) => {
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

    }
}

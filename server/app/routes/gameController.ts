import { Request, Response, NextFunction } from "express";
import { MongoClient } from "mongodb";
import { Game, createGame } from "../../../common/game/game";
import { ScoreBoard, createScoreBoard } from '../../../common/game/scoreBoard';
import "reflect-metadata";
import { injectable, } from "inversify";

export module GameController {

    const DB_URL: string = "mongodb://admin:npm2018*@ds157742.mlab.com:57742/npmdb";
    const COLLECTION_NAME = "games"
    const DB_NAME = "npmdb"

    @injectable()
    export class Games {
        public showGames(_req: Request, res: Response, _next: NextFunction): void {
            MongoClient.connect(DB_URL, { useNewUrlParser: true }, (err: Error, db: any) => {
                if (err) {
                    throw err;
                } else {
                    var games = db.db(DB_NAME).collection(COLLECTION_NAME);
                    games.find().toArray(function(_err: any, docs: any) {
                        res.send(JSON.stringify(docs));
                    });
                }
            });

        }
        public postGames(req: Request, res: Response, _next: NextFunction): void {
            MongoClient.connect(DB_URL, { useNewUrlParser: true }, (err: Error, db: any) => {
                if (err) {
                    throw err;
                }
                var scoreBoard: ScoreBoard = createScoreBoard();
                var game: Game = createGame(1, req.body.name, scoreBoard, scoreBoard, "", true);
                db.db(DB_NAME).collection(COLLECTION_NAME).insertOne(game, function(error: Error, _res: any) {
                    if (error) throw error;
                });
                res.send(JSON.stringify(game));
            });
        }
        public getSingleViewGame(_req: Request, res: Response, _next: NextFunction): void {
            MongoClient.connect(DB_URL, { useNewUrlParser: true }, (err: Error, db: any) => {
                if (err) {
                    throw err;
                }
                var games = db.db(DB_NAME).collection(COLLECTION_NAME);
                games.find({ singleView: true }).toArray(function(_err: Error, docs: any) {
                    res.send(JSON.stringify(docs));
                });
            });

        }
        public getDoubleViewGame(_req: Request, res: Response, _next: NextFunction): void {
            MongoClient.connect(DB_URL, { useNewUrlParser: true }, (err: Error, db: any) => {
                if (err) {
                    throw err
                }
                var games = db.db(DB_NAME).collection(COLLECTION_NAME);
                games.find({ singleView: false }).toArray(function(_err: any, docs: any) {
                    res.send(JSON.stringify(docs));
                });
            });
        }
    }
}

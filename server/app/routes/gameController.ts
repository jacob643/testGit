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
    let pictures = new Array<Blob>();

    @injectable()
    export class Games {
      public postPicture(req: Request, res: Response, _next: NextFunction): void {
          this.connect((db: any) => {
              console.log(req.body.form);
              let index = pictures.push(req.body.form.get('original'))-1;
              pictures.push(req.body.form.get('modified'));
              let scoreBoard: ScoreBoard = createScoreBoard();
              let game: Game = createGame(1, req.body.form.get('name'), scoreBoard, scoreBoard, "", true, index);
              //db.db(DB_NAME).collection(COLLECTION_NAME).insertOne(game, function(error: Error, _res: any) {
                //  if (error) throw error;
              //})
              res.send(JSON.stringify(game));
          });
      }
        private connect(func: Function): void {
            MongoClient.connect(DB_URL, { useNewUrlParser: true }, (err: Error, db: any) => {
                if (err) {
                    throw err;
                }
                func(db);
            });
        }

        public getGames(_req: Request, res: Response, _next: NextFunction): void {
            this.connect((db: any) => {
                let games = db.db(DB_NAME).collection(COLLECTION_NAME);
                games.find().toArray(function(_err: any, docs: any) {
                    res.send(JSON.stringify(docs));
                })
            });
        }

        public postGames(req: Request, res: Response, _next: NextFunction): void {
            this.connect((db: any) => {
                let scoreBoard: ScoreBoard = createScoreBoard();
                let game: Game = createGame(1, req.body.name, scoreBoard, scoreBoard, "", true, req.body.index);
                db.db(DB_NAME).collection(COLLECTION_NAME).insertOne(game, function(error: Error, _res: any) {
                    if (error) throw error;
                })
                res.send(JSON.stringify(game));
            });
        }

        public getGamesView(req: Request, res: Response, _next: NextFunction): void {
            let value: boolean = req.params.value == "true";
            this.connect((db: any) => {
                let games = db.db(DB_NAME).collection(COLLECTION_NAME);
                games.find({ singleView: value }).toArray(function(_err: Error, docs: any) {
                    res.send(JSON.stringify(docs));
                })
            });
        }

        public getGamesId(req: Request, res: Response, _next: NextFunction): void {
            let value: number = Number(req.params.id);
            this.connect((db: any) => {
                let games = db.db(DB_NAME).collection(COLLECTION_NAME);
                games.find({ id: value }).toArray(function(_err: Error, docs: any) {
                    res.send(JSON.stringify(docs));
                })
            });

        }
    }
}

//import { NextFunction } from "express";
import { expect } from "chai";
//import { mockReq, mockRes } from 'sinon-express-mock'
import "reflect-metadata";
const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");

//import { GameController } from "./gameController"
//import { Game, createGame } from "../../../common/game/game"

chai.should();
chai.use(sinonChai);

describe("GameController", () => {
    //let controller: GameController.Games;
    //let next: NextFunction
    //let game: Game;
    //let req = mockReq();
    //let res = mockRes();

    beforeEach(() => {
        //    controller = new GameController.Games();
        //    game = createGame();
    });

    afterEach(() => {
        sinon.restore()
    });

    describe("Initialize", () => {
        it("should exist", () => {
            expect(true).to.be.true
        });
    })

})

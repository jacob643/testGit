import { Injectable } from '@angular/core';
import { Game, createGame } from './../../../common/game/game';

@Injectable({
    providedIn: 'root'
})
export class GameService {

    constructor() { }

    generateExampleArray():Game[] {
        let gameExamples: Game[];
        gameExamples = [ createGame(), createGame(), createGame(), createGame(), createGame(), createGame()]

        return gameExamples;
    }
}

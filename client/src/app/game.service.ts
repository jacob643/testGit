import { Injectable } from '@angular/core';
import { Game } from './../../../common/game/game';

@Injectable({
    providedIn: 'root'
})
export class GameService {

    constructor() { }

    generateExample():Game {
        let gameExample: Game;
        gameExample = {
          id: 0,
          name: "gameTest",
          scoreSolo: {
              id: 0,
              first: { id: 0, name: "testUser0", time : "01:00" },
              second: { id: 1, name: "testUser1", time : "02:00" },
              third: { id: 2, name: "testUser2", time : "03:00" }
          },
          score1v1: {
              id: 1,
              first : { id: 3, name: "testUser3", time : "01:00" },
              second : { id: 4, name: "testUser4", time : "02:00" },
              third : { id: 5, name: "testUser5", time : "03:00" }
          },
          imagePath: "../assets/gameImage/gameTest",
          singleView: true
        }

        return gameExample;
    }

    generateExampleArray():Game[] {
        let gameExamples: Game[];
        gameExamples = [
            {
                id: 0,
                name: "gameTest",
                scoreSolo: {
                    id: 0,
                    first: { id: 0, name: "testUser0", time : "01:00" },
                    second: { id: 1, name: "testUser1", time : "02:00" },
                    third: { id: 2, name: "testUser2", time : "03:00" }
                },
                score1v1: {
                    id: 1,
                    first : { id: 3, name: "testUser3", time : "01:00" },
                    second : { id: 4, name: "testUser4", time : "02:00" },
                    third : { id: 5, name: "testUser5", time : "03:00" }
                },
                imagePath: "../assets/gameImage/gameTest",
                singleView: true
            },
            {
                id: 1,
                name: "gameTest1",
                scoreSolo: {
                    id: 2,
                    first: { id: 6, name: "testUser10", time : "01:00" },
                    second: { id: 7, name: "testUser11", time : "02:00" },
                    third: { id: 8, name: "testUser12", time : "03:00" }
                },
                score1v1: {
                    id: 3,
                    first : { id: 9, name: "testUser13", time : "01:00" },
                    second : { id: 10, name: "testUser14", time : "02:00" },
                    third : { id: 11, name: "testUser15", time : "03:00" }
                },
                imagePath: "../assets/gameImage/gameTest",
                singleView: false
            },
            {
                id: 2,
                name: "gameTest2",
                scoreSolo: {
                    id: 0,
                    first: { id: 12, name: "testUser20", time : "01:00" },
                    second: { id: 13, name: "testUser21", time : "02:00" },
                    third: { id: 14, name: "testUser22", time : "03:00" }
                },
                score1v1: {
                    id: 1,
                    first : { id: 15, name: "testUser23", time : "01:00" },
                    second : { id: 16, name: "testUser24", time : "02:00" },
                    third : { id: 17, name: "testUser25", time : "03:00" }
                },
                imagePath: "../assets/gameImage/gameTest",
                singleView: true
            },
            {
                id: 3,
                name: "gameTest3",
                scoreSolo: {
                    id: 2,
                    first: { id: 18, name: "testUser210", time : "01:00" },
                    second: { id: 19, name: "testUser211", time : "02:00" },
                    third: { id: 20, name: "testUser212", time : "03:00" }
                },
                score1v1: {
                    id: 3,
                    first : { id: 21, name: "testUser213", time : "01:00" },
                    second : { id: 22, name: "testUser214", time : "02:00" },
                    third : { id: 23, name: "testUser215", time : "03:00" }
                },
                imagePath: "../assets/gameImage/gameTest",
                singleView: false
            },


        ]

        return gameExamples;
    }
}

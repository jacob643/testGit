import { Injectable } from '@angular/core';
import { Game } from './../../../common/game/game.ts';

@Injectable({
    providedIn: 'root'
})
export class GameService {

    constructor() { }

    generateExample() {
        Game gameExample = {
            id = 0,
            name = "gameTest",
            soloScore = {
                id= 0,
                first = { id= 0, name= "testUser0", time = "01:00" },
                second = { id= 1, name= "testUser1", time = "02:00" },
                third = { id= 2, name= "testUser2", time = "03:00" }
            },
            1v1Score = {
                id= 1,
                first = { id= 3, name= "testUser3", time = "01:00" },
                second = { id= 4, name= "testUser4", time = "02:00" },
                third = { id= 5, name= "testUser5", time = "03:00" }
            },
            imagePath = "../assets/gameImage/gameTest",
            singleView = true
        }
    }
}

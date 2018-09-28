import { Component, OnInit } from '@angular/core';
import { Game, createGame } from './../../../../common/game/game';
import { GameService } from '../services/game.service';

@Component({
    selector: 'app-start-game',
    templateUrl: './start-game.component.html',
    styleUrls: ['./start-game.component.scss']
})
export class StartGameComponent implements OnInit {

    game: Game;

    constructor(private gameService: GameService) {
        this.game = createGame();
    }

    ngOnInit() {
        this.gameService.getGameById(this.gameService.selectedGameID).subscribe(game => this.game = game);
    }
}

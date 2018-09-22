import { Component, OnInit } from '@angular/core';
import { Game, createGame } from './../../../../common/game/game';
import { GameService } from '../services/game.service';
import { SelectedGameService } from '../services/selected-game.service'

@Component({
    selector: 'app-start-game',
    templateUrl: './start-game.component.html',
    styleUrls: ['./start-game.component.scss']
})
export class StartGameComponent implements OnInit {

    game: Game;

    constructor(private gameService: GameService,
        private selectedGame: SelectedGameService) {
        this.game = createGame();
    }

    ngOnInit() {
      this.gameService.getGameById(this.selectedGame.id).subscribe(game => this.game = game)
    }
}

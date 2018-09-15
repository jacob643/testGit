import { Component, OnInit } from '@angular/core';
import { Game } from './../../../../common/game/game';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-game-menu',
  templateUrl: './game-menu.component.html',
  styleUrls: ['./game-menu.component.scss']
})
export class GameMenuComponent implements OnInit {

    gameExample: Game;

    games : Game[];

    constructor(private gameService: GameService) { }

    ngOnInit() {
      this.getGames();
    }

    getGameExamples(): void {
//      this.gameExamples = this.gameService.generateExampleArray();
    }

    getGames(): void {
        this.gameService.getGames().subscribe(games => this.games = games)
    }

}

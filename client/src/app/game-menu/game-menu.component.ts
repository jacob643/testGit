import { Component, OnInit } from '@angular/core';
import { Game } from './../../../../common/game/game';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-menu',
  templateUrl: './game-menu.component.html',
  styleUrls: ['./game-menu.component.scss']
})
export class GameMenuComponent implements OnInit {

    gameExample: Game;

    gameExamples : Game[];

    constructor(private gameService: GameService) { }

    ngOnInit() {
      this.getGameExample();
      this.getGameExamples();
    }

    getGameExample(): void {
      this.gameExample = this.gameService.generateExample();
    }
    getGameExamples(): void {
      this.gameExamples = this.gameService.generateExampleArray();
    }

}

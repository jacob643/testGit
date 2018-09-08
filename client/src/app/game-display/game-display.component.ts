import { Component, OnInit } from '@angular/core';
import { Game } from './../../../../common/game/game';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-display',
  templateUrl: './game-display.component.html',
  styleUrls: ['./game-display.component.scss']
})
export class GameDisplayComponent implements OnInit {

  gameExample: Game;

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.getGameExample();
  }

  getGameExample(): void {
    this.gameExample = this.gameService.generateExample();
  }

}

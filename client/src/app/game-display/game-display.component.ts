import { Component, OnInit, Input } from '@angular/core';
import { Game, createGame } from './../../../../common/game/game';
import { Router } from '@angular/router'
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-game-display',
  templateUrl: './game-display.component.html',
  styleUrls: ['./game-display.component.scss']
})
export class GameDisplayComponent implements OnInit {

  @Input() game :Game;
  @Input() admin: Boolean;

  constructor( private router: Router, private gameService: GameService) {
      this.game = createGame();
  }

  ngOnInit() { }

  playGame() {
    this.router.navigate(['/game']);
    this.gameService.changeSelectedGameID(<number>this.game.id);
  }
}

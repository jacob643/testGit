import { Component, OnInit, Input } from '@angular/core';
import { Game, createGame } from './../../../../common/game/game';
import { Router } from '@angular/router'

@Component({
  selector: 'app-game-display',
  templateUrl: './game-display.component.html',
  styleUrls: ['./game-display.component.scss']
})
export class GameDisplayComponent implements OnInit {

  @Input() game :Game;

  constructor( private router: Router) {
      this.game = createGame();
  }

  ngOnInit() { }

  playGame() {
    this.router.navigate(['/game'], { queryParams: { id: this.game.id }})
  }
}

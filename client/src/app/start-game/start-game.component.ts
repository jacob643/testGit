import { Component, OnInit } from '@angular/core';
import { Game } from './../../../../common/game/game';

@Component({
  selector: 'app-start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.scss']
})
export class StartGameComponent implements OnInit {

  game :Game;

  constructor() { }

  ngOnInit() {
  }

}

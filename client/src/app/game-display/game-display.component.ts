import { Component, OnInit, Input } from '@angular/core';
import { Game } from './../../../../common/game/game';

@Component({
  selector: 'app-game-display',
  templateUrl: './game-display.component.html',
  styleUrls: ['./game-display.component.scss']
})
export class GameDisplayComponent implements OnInit {

  @Input() game :Game;

  constructor() { }

  ngOnInit() { }

}

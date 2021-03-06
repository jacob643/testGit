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

    games: Game[] = new Array<Game>();
    gamesSingleView: Game[] = new Array<Game>();
    gamesDoubleView: Game[] = new Array<Game>();

    constructor(private gameService: GameService) { }

    ngOnInit() {
        this.getGames();
        this.getGamesDoubleView();
        this.getGamesSingleView();
    }

    getGames(): void {
        this.gameService.getGames().subscribe(games => this.games = games)
    }

    getGamesSingleView(): void {
        this.gameService.getGamesSingleView().subscribe(games => this.gamesSingleView = games)
    }

    getGamesDoubleView(): void {
        this.gameService.getGamesDoubleView().subscribe(games => this.gamesDoubleView = games)
    }

}

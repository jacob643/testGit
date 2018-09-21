import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from './../../../../common/game/game';
import { GameService } from '../services/game.service';

@Component({
    selector: 'app-start-game',
    templateUrl: './start-game.component.html',
    styleUrls: ['./start-game.component.scss']
})
export class StartGameComponent implements OnInit {

    game: Game;

    constructor( private route: ActivatedRoute, private gameService: GameService ) { }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.getGameById( params['gameID'] );
        });
    }

    getGameById(id: number): void {
        this.gameService.getGameById(id).subscribe(game => this.game = game)
    }
}

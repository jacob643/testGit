import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from './../../../../common/game/game';

@Component({
    selector: 'app-start-game',
    templateUrl: './start-game.component.html',
    styleUrls: ['./start-game.component.scss']
})
export class StartGameComponent implements OnInit {

    gameID: number;
    game: Game;

    constructor( private route: ActivatedRoute ) { }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.gameID = params['gameID'];
        });
    }
}

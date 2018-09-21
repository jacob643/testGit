import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-start-game',
    templateUrl: './start-game.component.html',
    styleUrls: ['./start-game.component.scss']
})
export class StartGameComponent implements OnInit {

    gameID: number;

    constructor( private route: ActivatedRoute ) { }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.gameID = params['gameID'];
        });
    }
}

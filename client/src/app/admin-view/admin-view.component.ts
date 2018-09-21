import { Component, OnInit } from '@angular/core';
import { Game } from './../../../../common/game/game';
import { GameService } from '../services/game.service';

@Component({
    selector: 'app-admin-view',
    templateUrl: './admin-view.component.html',
    styleUrls: ['./admin-view.component.scss'],
    host: { 'class': 'center' }
})
export class AdminViewComponent implements OnInit {

    gamesSingleView: Game[];
    gamesDoubleView: Game[];

    constructor(private gameService: GameService) { }

    ngOnInit() {
        this.getGamesDoubleView();
        this.getGamesSingleView();
    }

    getGamesSingleView(): void {
        this.gameService.getGamesSingleView().subscribe(games => this.gamesSingleView = games)
    }

    getGamesDoubleView(): void {
        this.gameService.getGamesDoubleView().subscribe(games => this.gamesDoubleView = games)
    }

    openCloseForm() {
        let form = document.getElementById('form');
        if (form != null) {
            form.classList.toggle('closed');
        }
        this.cancelForm();
    }

    cancelForm() {
        this.resetInput('newGameName');
        this.resetInput('originalFile');
        this.resetInput('modifiedFile');
    }

}

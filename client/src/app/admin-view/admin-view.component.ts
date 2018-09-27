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

    readonly newGameName = 'newGameName';
    readonly originalFile = 'originalFile';
    readonly modifiedFile = 'modifiedFile';

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
        this.resetInput(this.newGameName);
        this.resetInput(this.originalFile);
        this.resetInput(this.modifiedFile);
    }

    resetInput(id: string) {
        let idElement = <HTMLInputElement>document.getElementById(id);
        if (idElement != null) {
            idElement.value = '';
        }
    }

    getInputValue(id: string) {
        let idElement = <HTMLInputElement>document.getElementById(id);
        if (idElement != null) {
            return idElement.value;
        }
        return '';
    }

    submitForm() {
        if (this.isFulfill()) {
            this.gameService.post(this.getInputValue(this.newGameName)).subscribe(() => {
              alert('the new game has been added to the list');
            });
        }
    }

    isFulfill() {
        if (!this.checkInputs()) alert('not all fields are filled\nthe length of name must be between 4 and 15 characters');
        return this.checkInputs();
    }

    checkInputs() {
        this.checkName(this.newGameName);
        this.checkFile(this.originalFile);
        this.checkFile(this.modifiedFile);
    }

    checkName(id: string) {
        let idElement = <HTMLInputElement>document.getElementById(id);
        if (idElement.value.length < 4
            || idElement.value.length > 15)
            throw (RangeError('the length of name must be between 4 and 15 characters'));
    }

    checkFile(id: string) {

        if (this.getInputValue(id) == '') throw (RangeError('not all file fields are filled'));
    }
}

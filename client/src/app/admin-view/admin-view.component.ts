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

    resetInput(id:string) {
        let idElement = <HTMLInputElement>document.getElementById(id);
        if (idElement != null) {
            idElement.value = '';
        }
    }

    getInputValue(id:string) {
        let idElement = <HTMLInputElement>document.getElementById(id);
        if (idElement != null) {
            return idElement.value;
        }
        return '';
    }

    submitForm() {
        if(this.isFulfill())
        {
            this.gameService.post(this.getInputValue('newGameName')).subscribe(() => {alert('works bitch');});
        }
    }

    isFulfill() {
        if(!this.checkInputs())alert('not all fields are filled');
        return this.checkInputs();
    }

    checkInputs() {
        return this.checkInput('newGameName')
            && this.checkInput('originalFile')
            && this.checkInput('modifiedFile');
    }
    checkInput(id:string) {
        let idElement = <HTMLInputElement>document.getElementById(id);
        if (idElement.value == '') return false;
        return true;
    }
}

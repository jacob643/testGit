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
    readonly minNameLength = 4;
    readonly maxNameLength = 15;
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

    getInputFile(id: string) {
        let idElement = <HTMLInputElement>document.getElementById(id);
        if (idElement != null) {
            if (idElement.files != null) {
                return idElement.files[0];
            }
            throw Error();
        }
        throw Error();
    }

    submitForm() {
        try {
            this.checkInputs();
            //let formData = new FormData;
            //formData.append("name",this.getInputValue(this.newGameName));
            //formData.append("original",this.getInputFile(this.originalFile));
            //formData.append("modified",this.getInputFile(this.modifiedFile));
            this.gameService.post(this.getInputValue(this.newGameName), this.getInputFile(this.originalFile))
                .subscribe(game => {
                    this.gamesSingleView.push(game);
                    alert('the new game has been added to the list');
                });
            //this.gameService.uploadEverything(formData).subscribe();
        }
        catch (e) {
            alert(e.message);
        }
    }

    checkInputs() {
        this.checkName(this.newGameName);
        this.checkFile(this.originalFile);
        this.checkFile(this.modifiedFile);
    }

    checkName(id: string) {
        let idElement = <HTMLInputElement>document.getElementById(id);
        if (idElement.value.length < this.minNameLength
            || idElement.value.length > this.maxNameLength)
            throw (RangeError('the length of name must be between 4 and 15 characters'));
    }

    checkFile(id: string) {
        if (this.getInputValue(id) == '') throw (RangeError('not all file fields are filled'));
        //read header, verify file type and size.
        let blob = this.getInputFile(id);
        let sizeofWantedFile = 480 * 640 * 3 + 54;
        if (blob.size != sizeofWantedFile) throw (Error('the image has not the good size'));
        //	bitmap	(BMP) 24-bit et	avoir	une
        //  taille	de	640	x	480	pixels.
        //  let wow = JSON.stringify(blob);
    }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from "@angular/common/http";
import { Game } from './../../../../common/game/game';
import { Observable } from "rxjs";
import { catchError } from 'rxjs/operators';
import { ErrorsHandler } from './errorhandler/errorhandler.service'

@Injectable({
    providedIn: 'root'
})
export class GameService {

    selectedGameID: number;
    public listPicture: Array<Blob> = new Array<Blob>();
    readonly URL = "http://localhost:3000/games";

    constructor(private http: HttpClient, private errorHandler: ErrorsHandler) { }

    public post(name: string, blob: Blob): Observable<Game> {
        let index = this.listPicture.push(blob) - 1;
        return this.http.post<Game>(this.URL, { name: name, index: index }).pipe(
            catchError(this.errorHandler.handleAsyncError<Game>())
        );
    }

    public getGames(): Observable<Game[]> {
        return this.http.get<Game[]>(this.URL).pipe(
            catchError(this.errorHandler.handleAsyncError<Game[]>())
        );
    }

    public getGamesSingleView(): Observable<Game[]> {
        return this.http.get<Game[]>(this.URL + "/" + "true").pipe(
            catchError(this.errorHandler.handleAsyncError<Game[]>())
        );
    }

    public getGamesDoubleView(): Observable<Game[]> {
        return this.http.get<Game[]>(this.URL + "/" + "false").pipe(
            catchError(this.errorHandler.handleAsyncError<Game[]>())
        );
    }

    public uploadFile(file: File) {
        let formData: FormData = new FormData();
        formData.append('file', file, file.name);

        let req = new HttpRequest('post', this.URL, formData, {});

        this.http.request(req).subscribe();
    }

    public getGameById(id: number): Observable<Game> {
        return this.http.get<Game>(this.URL + "/id/" + id).pipe(
            catchError(this.errorHandler.handleAsyncError<Game>())
        );
    }

    public changeSelectedGameID(selectedGameID: number) {
        this.selectedGameID = selectedGameID;
    }
}

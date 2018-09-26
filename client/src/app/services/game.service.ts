import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Game } from './../../../../common/game/game';
import { Observable } from "rxjs";
import { catchError } from 'rxjs/operators';
import { ErrorsHandler } from './errorhandler/errorhandler.service'

@Injectable({
    providedIn: 'root'
})
export class GameService {

    readonly URL = "http://localhost:3000/games";

    constructor(private http: HttpClient, private errorHandler: ErrorsHandler) { }

    public post(name: string): Observable<Game> {
        return this.http.post<Game>(this.URL, { name }).pipe(
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

    public getGameById(id: number): Observable<Game> {
        return this.http.get<Game>(this.URL + "/id/" + id);
    }
}

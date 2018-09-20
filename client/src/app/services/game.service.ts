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

    constructor(private http: HttpClient, private errorHandler: ErrorsHandler) { }

    public post(name: string): Observable<Game> {
        return this.http.post<Game>("http://localhost:3000/games", { name }).pipe(
            catchError(this.errorHandler.handleAsyncError<Game>())
        );
    }

    public getGames(): Observable<Game[]> {
        return this.http.get<Game[]>("http://localhost:3000/games").pipe(
            catchError(this.errorHandler.handleAsyncError<Game[]>())
        );
    }

    public getGamesSingleView(): Observable<Game[]> {
        return this.http.get<Game[]>("http://localhost:3000/games/singleView").pipe(
            catchError(this.errorHandler.handleAsyncError<Game[]>())
        );
    }

    public getGamesDoubleView(): Observable<Game[]> {
        return this.http.get<Game[]>("http://localhost:3000/games/doubleView").pipe(
            catchError(this.errorHandler.handleAsyncError<Game[]>())
        );
    }
}

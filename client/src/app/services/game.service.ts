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

    public uploadFile(file: File) {
        let formData: FormData = new FormData();
        formData.append('file', file, file.name);

        let req = new HttpRequest('post', this.URL, formData, {});

        this.http.request(req).subscribe();
    }

    public getGameById(id: number): Observable<Game> {
        return this.http.get<Game>(this.URL + "/id/" + id);
    }

    public changeSelectedGameID(selectedGameID: number){
      this.selectedGameID = selectedGameID;
    }
}

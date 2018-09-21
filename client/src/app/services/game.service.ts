import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Game } from './../../../../common/game/game';
import { Observable } from "rxjs";
@Injectable({
    providedIn: 'root'
})
export class GameService {

    constructor(private http: HttpClient) { }

    public post(name: string): Observable<Game>{
        return this.http.post<Game>("http://localhost:3000/games",{name});
    }

    public getGames(): Observable<Game[]>{
        return this.http.get<Game[]>("http://localhost:3000/games");
    }

    public getGamesSingleView(): Observable<Game[]>{
        return this.http.get<Game[]>("http://localhost:3000/games/singleView");
    }

    public getGamesDoubleView(): Observable<Game[]>{
        return this.http.get<Game[]>("http://localhost:3000/games/doubleView");
    }

    public getGameById(id: number): Observable<Game>{
        return this.http.get<Game>("http://localhost:3000/game/" + id);
    }
}

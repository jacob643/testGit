import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Game, createGame } from './../../../../common/game/game';
import { Observable } from "rxjs";
@Injectable({
    providedIn: 'root'
})
export class GameService {

    constructor(private http: HttpClient) { }

    generateExampleArray():Game[] {
        let gameExamples: Game[];
        gameExamples = [ createGame(), createGame(), createGame(), createGame(), createGame(), createGame()]

        return gameExamples;
    }

    public post(name: string): Observable<Game>{
        return this.http.post<Game>("http://localhost:3000/games",{name});
    }

    public getGames(): Observable<Game[]>{
        return this.http.get<Game[]>("http://localhost:3000/games");
    }
}

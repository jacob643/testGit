import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";

import { User } from "../../../../common/user/user";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private readonly BASE_URL: string = "http://localhost:3000/users";
    public constructor(private http: HttpClient) { }

    public getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.BASE_URL).pipe(
            catchError(this.handleError<User[]>("GetUsers"))
        );
    }

    public postUser(name: string): Observable<User> {
        return this.http.post<User>(this.BASE_URL, name).pipe(
            catchError(this.handleError<User>("PostUser"))
        );
    }

    public getUser(name: string): Observable<User> {
        return this.http.get<User>(this.BASE_URL + '/' + name).pipe(
            catchError(this.handleError<User>("GetUser"))
        );
    }

    public handleError<T>(request: string, result?: T): (error: Error) => Observable<T> {
        return (error: Error): Observable<T> => {
            return of(result as T);
        };
    }
}

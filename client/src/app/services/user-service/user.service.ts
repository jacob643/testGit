import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { ErrorsHandler } from '../errorhandler/errorhandler.service'

import { User } from "../../../../../common/user/user";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private readonly BASE_URL: string = "http://localhost:3000/users";
    public constructor(private http: HttpClient, private errorHandler: ErrorsHandler) { }

    public getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.BASE_URL).pipe(
            catchError(this.errorHandler.handleAsyncError<User[]>())
        );
    }

    public postUser(name: string): Observable<User> {
        return this.http.post<User>(this.BASE_URL, { name }).pipe(
            catchError(this.errorHandler.handleAsyncError<User>())
        );
    }

    public getUser(name: string): Observable<User> {
        return this.http.get<User>(this.BASE_URL + '/' + name).pipe(
            catchError(this.errorHandler.handleAsyncError<User>())
        );
    }
}

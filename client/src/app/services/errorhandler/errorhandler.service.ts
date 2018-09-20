import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ErrorsHandler implements ErrorHandler {

    constructor() { }

    handleError<T>(error: Error, result?: T) {
        // Do whatever you like with the error (send it to the server?)
        // And log it to the console
        console.error('It happens: ', error);
        return (result as T);
    }
}

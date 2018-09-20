import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { of, Observable } from 'rxjs';
import { NotificationService } from '../notification/notification.service';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ErrorsHandler implements ErrorHandler {

    constructor(private injector: Injector) { }

    handleError<T>(error: Error, result?: T) {
        // Do whatever you like with the error (send it to the server?)
        // And log it to the console
        const notificationService = this.injector.get(NotificationService);
        notificationService.error(error.message);
        console.error(error);
        return (result as T);
    }

    handleAsyncError<T>(result?: T): (error: HttpErrorResponse) => Observable<T> {
        return (error: HttpErrorResponse) => {
            const notificationService = this.injector.get(NotificationService);
            notificationService.notification = error.error;
            console.error(error.error.text);
            return of(result as T);
        }
    }
}

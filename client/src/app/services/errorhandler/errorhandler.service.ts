import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { of } from 'rxjs';
import { NotificationService } from '../notification/notification.service';
import { ERROR, createNotification } from "../../../../../common/communication/notification"

@Injectable({
    providedIn: 'root'
})
export class ErrorsHandler implements ErrorHandler {

    constructor(private injector: Injector) { }

    handleError<T>(error: Error, result?: T) {
        // Do whatever you like with the error (send it to the server?)
        // And log it to the console
        this.notify(error)
        return (result as T);
    }

    handleAsyncError<T>(error: Error, result?: T) {
        this.notify(error)
        return of(result as T);
    }

    private notify(error: Error): void {
        const notificationService = this.injector.get(NotificationService);
        notificationService.notification = createNotification(error.message, ERROR);
        console.error(error);
    }
}

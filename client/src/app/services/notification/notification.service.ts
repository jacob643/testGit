import { Injectable } from '@angular/core';
import { Notification, createNotification, ERROR } from '../../../../../common/communication/notification'

@Injectable({
    providedIn: 'root'
})
export class NotificationService {
    public notification: Notification | undefined = undefined;

    constructor() { }

    error(msg: string) {
        this.notification = createNotification(msg, ERROR)
    }

    clear() {
        this.notification = undefined
    }
}

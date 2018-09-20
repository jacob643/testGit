import { Injectable } from '@angular/core';
import { Notification, createNotification } from '../../../../../common/communication/notification'

@Injectable({
    providedIn: 'root'
})
export class NotificationService {
    notification: Notification = createNotification();

    constructor() { }
}

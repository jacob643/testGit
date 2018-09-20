import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../services/notification/notification.service';

@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

    constructor(private notificationService: NotificationService) { }

    ngOnInit() {
    }

    clear() {
        this.notificationService.clear();
    }

}

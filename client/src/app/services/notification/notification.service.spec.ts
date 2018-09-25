import { TestBed, inject } from '@angular/core/testing';

import { NotificationService } from './notification.service';
import { createNotification } from '../../../../../common/communication/notification';

describe('NotificationService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [NotificationService]
        });
    });

    it('should be created', inject([NotificationService], (service: NotificationService) => {
        expect(service).toBeTruthy();
    }));

    describe('clear', inject([NotificationService], (service: NotificationService) => {
        it("should make the notification falsy", () => {
            service.notification = createNotification();
            service.clear();
            expect(service.notification).toBeFalsy();
        });
    }));
});

import { NotificationService } from './notification.service';
import { Notification, createNotification, ERROR } from '../../../../../common/communication/notification';


describe('NotificationService', () => {
    let not: Notification;
    let service: NotificationService;

    beforeEach(() => {
        service = new NotificationService();
        not = createNotification();
    });

    describe('initialize', () => {
        it('notification should be null', () => {
            expect(service.notification).toBeFalsy();
        });
    });

    describe('clear', () => {
        it("should make the notification undefined", () => {
            service.notification = not;
            service.clear();
            expect(service.notification).toBeFalsy();
        });
    });

    describe("error", () => {
        it("should create a notification", () => {
            service.error(not.text);
            if (service.notification) {
                expect(service.notification.text).toEqual(not.text);
                expect(service.notification.status).toEqual(ERROR);
            } else {
                expect(false).toBeTruthy()
            }
        })
    });
});

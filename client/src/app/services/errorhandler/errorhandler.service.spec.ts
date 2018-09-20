import { TestBed, inject } from '@angular/core/testing';

import { ErrorsHandler } from './errorhandler.service';

describe('ErrorhandlerService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ErrorsHandler]
        });
    });

    it('should be created', inject([ErrorsHandler], (service: ErrorsHandler) => {
        expect(service).toBeTruthy();
    }));
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitalViewComponent } from './inital-view.component';

describe('InitalViewComponent', () => {
    let component: InitalViewComponent;
    let fixture: ComponentFixture<InitalViewComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [InitalViewComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(InitalViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

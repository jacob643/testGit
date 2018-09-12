import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StopwatchComponent } from './stopwatch.component';
import { assert } from 'chai';

describe('StopwatchComponent', () => {
    let component: StopwatchComponent;
    let fixture: ComponentFixture<StopwatchComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [StopwatchComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(StopwatchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should start at 00:00', () => {
        assert(component.output == "00:00");
    });

});

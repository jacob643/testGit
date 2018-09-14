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


        it('should be greater than 0 after started', () => {

            component.start();
            let waitTime = 100;
            let precision = 5;
            let startTime = new Date().getTime();
            let now = new Date().getTime();
            while(now < startTime + waitTime)
            {
                now = new Date().getTime();
            }
            component.stop();
            assert(waitTime - precision < component.elapsedTime
                && component.elapsedTime < waitTime + precision);
        });

});

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

    function wait(waitTime: number) {
        component.startTime -= waitTime;
        //like if we started 1.01 seconds ago.
        // we have to know how the component works to do that.
    }

    it('should be greater than 0 after started', () => {

        component.start();
        let waitTime = 100;
        let precision = 5;
        wait(waitTime);
        component.stop();
        assert(waitTime - precision < component.elapsedTime
            && component.elapsedTime < waitTime + precision);
    });

    it('should show 00:01 after a sec', () => {
        component.start();
        let waitTime = 1010;
        wait(waitTime);
        component.stop();
        //stop forces the update of the view.
        assert(component.output == "00:01");
    });

    it('should stop when stopped', () => {
        component.start();
        let waitTime = 1010;
        wait(waitTime);
        component.stop();
        let old = component.output;
        wait(waitTime);
        component.updateview();
        assert(old == component.output);
    });
});

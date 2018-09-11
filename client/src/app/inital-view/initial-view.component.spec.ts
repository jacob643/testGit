import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialViewComponent } from './initial-view.component';

import { FormsModule } from "@angular/forms"

describe('InitialViewComponent', () => {
    let component: InitialViewComponent;
    let fixture: ComponentFixture<InitialViewComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [InitialViewComponent],
            imports: [FormsModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(InitialViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have a user', () => {
        expect(component.user).toBeTruthy();
    })

    it('should be alphanumeric', () => {
        expect(component.user.regexpression.test("TestUser99+")).toBeFalsy();
    })

    it('should contain 4-10 characters', () => {
        expect(component.user.regexpression.test("TestUser9999")).toBeFalsy();
    })
});

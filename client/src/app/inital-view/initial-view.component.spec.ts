import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialViewComponent } from './initial-view.component';
import { HttpClientModule } from "@angular/common/http";
import { UserService } from '../services/user-service/user.service';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from "@angular/forms"

import { } from "jasmine";

describe('InitialViewComponent', () => {
    let component: InitialViewComponent;
    let fixture: ComponentFixture<InitialViewComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [InitialViewComponent],
            imports: [HttpClientModule, FormsModule],
            providers: [UserService, { provide: APP_BASE_HREF, useValue: '/' }]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(InitialViewComponent);
        component = fixture.debugElement.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have a user', () => {
        expect(component.user).toBeTruthy();
    })
});

import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { InitialViewComponent } from './initial-view.component';
import { UserService } from '../services/user-service/user.service';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from "@angular/forms"
import { } from "jasmine";

import { User, createUser } from "../../../../common/user/user"
import { of } from 'rxjs';

describe('InitialViewComponent', () => {
    let component: InitialViewComponent;
    let fixture: ComponentFixture<InitialViewComponent>;
    let userService: UserService;
    let user: User;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [InitialViewComponent],
            imports: [HttpClientModule, FormsModule],
            providers: [UserService, { provide: APP_BASE_HREF, useValue: '/' }]
        })
            .compileComponents();
    }));

    beforeEach(inject([UserService], (u: UserService) => {
        user = createUser();
        userService = u;
        fixture = TestBed.createComponent(InitialViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have a user', () => {
        spyOn(userService, 'postUser').and.returnValue(of(user));
        component.name = user.name
        component.postUser();
        fixture.detectChanges();
        expect(component.user).toEqual(user);
    })
});

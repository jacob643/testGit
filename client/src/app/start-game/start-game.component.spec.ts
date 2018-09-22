import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StartGameComponent } from './start-game.component';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHandler } from "@angular/common/http";
import { } from "jasmine";

describe('StartGameComponent', () => {
    let component: StartGameComponent;
    let fixture: ComponentFixture<StartGameComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [StartGameComponent],
            providers: [ HttpClient, HttpHandler, {provide : ActivatedRoute, useValue : routeStub }]
        })
            .compileComponents();
    }));

    let routeStub: any;

    beforeEach(() => {
        fixture = TestBed.createComponent(StartGameComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        routeStub = { queryParams: { id: null} };
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

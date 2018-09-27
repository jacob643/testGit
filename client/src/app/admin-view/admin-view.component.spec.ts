import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { GameDisplayComponent } from '../game-display/game-display.component';
import { GameService } from '../services/game.service';
import { HttpClientModule } from "@angular/common/http";
import { AdminViewComponent } from './admin-view.component';
import { Game } from '../../../../common/game/game';
import { of } from 'rxjs';


describe('AdminViewComponent', () => {
    let component: AdminViewComponent;
    let fixture: ComponentFixture<AdminViewComponent>;
    let gameService: GameService
    let games: Game[] = new Array<Game>()
    let dummyInput: HTMLInputElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AdminViewComponent,
                GameDisplayComponent],
            providers: [GameService],
            imports: [
                HttpClientModule,
            ],
        })
            .compileComponents();
    }));

    beforeEach(inject([GameService], (g: GameService) => {
        gameService = g;
        spyOn(gameService, "post").and.returnValue(of(games));
        spyOn(gameService, "getGames").and.returnValue(of(games));
        spyOn(gameService, "getGamesSingleView").and.returnValue(of(games));
        spyOn(gameService, "getGamesDoubleView").and.returnValue(of(games));
        fixture = TestBed.createComponent(AdminViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        dummyInput = document.createElement('input');
        dummyInput.id = 'dummy';
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('checkName', () => {

        it('should throw error if small length', () => {
            dummyInput.value = "123";
            document.getElementById = jasmine.createSpy('getElementById').and.returnValue(dummyInput);
            expect(() => {
                component.checkName('dummy')
            }).toThrow();
        });

        it('should throw error if big length', () => {
            dummyInput.value = "123456789101112131415";
            document.getElementById = jasmine.createSpy('getElementById').and.returnValue(dummyInput);
            expect(() => {
                component.checkName('dummy')
            }).toThrow();
        });

        it('should not throw error if good length', () => {
            dummyInput.value = "123456789";
            document.getElementById = jasmine.createSpy('getElementById').and.returnValue(dummyInput);
            expect(() => {
                component.checkName('dummy')
            }).not.toThrow();
        });
    });

    describe('checkFile', () => {
        it('should throw error if empty', () => {
            dummyInput.value = "";
            document.getElementById = jasmine.createSpy('getElementById').and.returnValue(dummyInput);
            expect(() => {
                component.checkName('dummy')
            }).toThrow();
        });
    });
});

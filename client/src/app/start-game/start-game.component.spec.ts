import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { StartGameComponent } from './start-game.component';
import { Game, createGame } from "./../../../../common/game/game";
import { } from "jasmine";
import { GameService } from '../services/game.service';
import { of } from '../../../node_modules/rxjs';
import { HttpClientModule } from '../../../node_modules/@angular/common/http';

describe('StartGameComponent', () => {
    let component: StartGameComponent;
    let fixture: ComponentFixture<StartGameComponent>;
    let game: Game;
    let gameService: GameService;

    beforeEach( async(() => {
        TestBed.configureTestingModule({
            declarations: [StartGameComponent],
            providers: [GameService],
            imports: [HttpClientModule]
        })
            .compileComponents();
    }));

    beforeEach(inject([GameService], (g: GameService)=> {
        game = createGame();
        gameService = g;
        spyOn(gameService, "getGameById").and.returnValue(of(game));
        fixture = TestBed.createComponent(StartGameComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

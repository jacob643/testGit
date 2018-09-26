import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { GameMenuComponent } from './game-menu.component';
import { GameDisplayComponent } from '../game-display/game-display.component';
import { GameService } from '../services/game.service';
import { HttpClientModule } from "@angular/common/http";
import { Game } from "./../../../../common/game/game";
import { of } from 'rxjs';

describe('GameMenuComponent', () => {
    let component: GameMenuComponent;
    let fixture: ComponentFixture<GameMenuComponent>;
    let games: Game[];
    let gameService: GameService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [GameMenuComponent,
                GameDisplayComponent],
            providers: [GameService],
            imports: [
                HttpClientModule,
            ],
        })
            .compileComponents();
    }));

    beforeEach(inject([GameService], (g: GameService) => {
        games = new Array<Game>();
        gameService = g
        spyOn(gameService, "post").and.returnValue(of(games));
        spyOn(gameService, "getGames").and.returnValue(of(games));
        spyOn(gameService, "getGamesSingleView").and.returnValue(of(games));
        spyOn(gameService, "getGamesDoubleView").and.returnValue(of(games));
        fixture = TestBed.createComponent(GameMenuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have a list of games', async () => {
        component.getGames();
        fixture.detectChanges();
        expect(component.games).toEqual(games);
    })

    it('should have a list of games in single view', async () => {
        component.getGamesSingleView();
        fixture.detectChanges();
        expect(component.gamesSingleView).toEqual(games);
    })

    it('should have a list of games in double view', async () => {
        component.getGamesDoubleView();
        fixture.detectChanges();
        expect(component.gamesDoubleView).toEqual(games);
    })
});

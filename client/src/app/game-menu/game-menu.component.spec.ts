import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GameMenuComponent } from './game-menu.component';
import { GameDisplayComponent } from '../game-display/game-display.component';
import { GameService } from '../services/game.service';
import { HttpClientModule } from "@angular/common/http";

describe('GameMenuComponent', () => {
  let component: GameMenuComponent;
  let fixture: ComponentFixture<GameMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameMenuComponent,
                    GameDisplayComponent],
      providers: [GameService],
      imports: [
          HttpClientModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of games', async() => {
    setTimeout(() => {
      expect(component.games).toBeDefined();
    }, 1000);
  })

  it('should have a list of games in single view', async() => {
    setTimeout(() => {
      expect(component.gamesSingleView).toBeTruthy();
    }, 1000);
  })

  it('should have a list of games in double view', async() => {
    setTimeout(() => {
      expect(component.gamesDoubleView).toBeTruthy();
    }, 1000);
  })
});

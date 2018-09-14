import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GameMenuComponent } from './game-menu.component';
import { GameDisplayComponent } from '../game-display/game-display.component';
import { GameService } from '../services/game.service';
//import { FormsModule } from "@angular/forms"
//import { HttpClientModule } from "@angular/common/http";
//import { AppRouterModule } from "../router/approuter.module";
//import { BrowserModule } from "@angular/platform-browser";

describe('GameMenuComponent', () => {
  let component: GameMenuComponent;
  let fixture: ComponentFixture<GameMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameMenuComponent,
                    GameDisplayComponent],
      providers: [GameService],
      //imports: [
         // BrowserModule,
          //HttpClientModule,
         // AppRouterModule,
         // FormsModule
      //],
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
});

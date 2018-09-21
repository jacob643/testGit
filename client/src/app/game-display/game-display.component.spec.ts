import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from "@angular/forms"
import { GameDisplayComponent } from './game-display.component';
import { Router } from '@angular/router'

describe('GameDisplayComponent', () => {
  let component: GameDisplayComponent;
  let fixture: ComponentFixture<GameDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameDisplayComponent ],
      imports: [
          FormsModule
      ],
      providers: [ {provide : Router, useClass : class {navigate = jasmine.createSpy("navigate");} }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('game should not be null', () => {
    expect(component.game).toBeDefined();
  });
});

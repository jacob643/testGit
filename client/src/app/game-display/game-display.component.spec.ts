import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { FormsModule } from "@angular/forms"
import { GameDisplayComponent } from './game-display.component';
import { Router } from '@angular/router'
import { HttpClient, HttpHandler } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

describe('GameDisplayComponent', () => {
  let component: GameDisplayComponent;
  let fixture: ComponentFixture<GameDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameDisplayComponent ],
      imports: [
          FormsModule
      ],
      providers: [ {provide: DomSanitizer, useValue: {sanitize: () => 'safeString', bypassSecurityTrustUrl: () => 'safeString' }}, {provide : Router, useClass : class {navigate = jasmine.createSpy("navigate");} }, HttpClient, HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(inject([DomSanitizer], (d: DomSanitizer) => {
    spyOn(d, "bypassSecurityTrustUrl");
    fixture = TestBed.createComponent(GameDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
}));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('game should not be null', () => {
    expect(component.game).toBeDefined();
  });
});

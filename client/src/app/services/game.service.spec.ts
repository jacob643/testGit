import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from "@angular/common/http";
import { GameService } from './game.service';
import { HttpClient } from "@angular/common/http";

describe('GameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [GameService, HttpClient]
    });
  });

  it('should be created', inject([GameService], (service: GameService) => {
    expect(service).toBeTruthy();
  }));
});

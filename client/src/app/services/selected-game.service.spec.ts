import { TestBed, inject } from '@angular/core/testing';

import { SelectedGameService } from './selected-game.service';

describe('SelectedGameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SelectedGameService]
    });
  });

  it('should be created', inject([SelectedGameService], (service: SelectedGameService) => {
    expect(service).toBeTruthy();
  }));
});

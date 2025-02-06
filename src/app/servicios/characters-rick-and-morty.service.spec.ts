import { TestBed } from '@angular/core/testing';

import { CharactersRickAndMortyService } from './characters-rick-and-morty.service';

describe('CharactersRickAndMortyService', () => {
  let service: CharactersRickAndMortyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharactersRickAndMortyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

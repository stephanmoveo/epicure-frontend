import { TestBed } from '@angular/core/testing';

import { MokeService } from './moke.service';

describe('MokeService', () => {
  let service: MokeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MokeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HttpHandlerService } from './http-handler.service';

describe('HttpHandlerService', () => {
  let service: HttpHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([]), HttpClientTestingModule],

    });
    service = TestBed.inject(HttpHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AdminService } from './admin.service';

describe('AdminService', () => {
  let service: AdminService;
  let httpMoke: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([]), HttpClientTestingModule],
      providers: [AdminService],
    });
    service = TestBed.inject(AdminService);
    httpMoke = TestBed.inject(HttpTestingController);
  });

  it('update a rest', () => {
    const succses = { succses: true };
    const obj = {
      id: '618107960bb6f9c3176d110c',
      name: 'La KKumba',
      image: 'assets/img/Rests/messa_2021-10-20/messa.png',
      chefId: '6185cc4c306a782bd6e6831e',
    };
    service.updateRestaurant(obj).subscribe((data) => {
      expect(data).toEqual(succses);
    });
    const request = httpMoke.expectOne(
      `${service.localHost}restaurants/updateRestaurant`
    );
    expect(request.request.method).toBe('POST');
    request.flush(succses);
  });

  it('creates a rest', () => {
    const succses = { succses: true };
    const obj = {
      name: 'La KKumba',
      image: 'assets/img/Rests/messa_2021-10-20/messa.png',
      chefId: '6185cc4c306a782bd6e6831e',
    };
    service.createRestaurant(obj).subscribe((data) => {
      expect(data).toEqual(succses);
    });
    const request = httpMoke.expectOne(
      `${service.localHost}restaurants/createRestaurant`
    );
    expect(request.request.method).toBe('POST');
    request.flush(succses);
  });
});

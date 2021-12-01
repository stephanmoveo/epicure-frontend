import { inject, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { RestaurantsService } from './restaurants.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('RestaurantsService', () => {
  let service: RestaurantsService;
  let httpMoke: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([]), HttpClientTestingModule],
      providers: [RestaurantsService],
    });
    service = TestBed.inject(RestaurantsService);
    httpMoke = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMoke.verify();
  });
//TODO - it vs test
  it('get all retsts', () => {
    const dummyRests = [
      {
        _id: '618107960bb6f9c3176d110c',
        name: 'Onza',
        image: 'assets/img/Rests/All/onza.jpg',
        chef: {
          _id: '618105c865292eca59830e68',
          firstName: 'Yossi',
          lastName: 'Shitrit',
        },
      },
      {
        _id: '618107960bb6f9c3176d110c',
        name: 'Monza',
        image: 'assets/img/Rests/All/onza.jpg',
        chef: {
          _id: '618105c865292eca59830e68',
          firstName: 'Kossi',
          lastName: 'XXhitrit',
        },
      },
    ];
    service.dbAllRestaurants().subscribe((data) => {
      expect(data.length).toBe(2);
      expect(data).toEqual(dummyRests);
    });
    const request = httpMoke.expectOne(
      `${service.localHost}restaurants/readAllRestaurants`
    );
    expect(request.request.method).toBe('GET');
    request.flush(dummyRests);
  });
});

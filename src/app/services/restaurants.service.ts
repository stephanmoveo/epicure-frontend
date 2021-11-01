import { Injectable } from '@angular/core';
import { restuarantsInterface } from '../shared/interfaces/restuarantsInterface';
import { IconsService } from './icons.service';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class RestaurantsService {
  constructor(public iconsService: IconsService, public http: HttpClient) {}

  allRestaurantsArrSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(
    []
  );
  $allRestaurantsArr: Observable<any[]> =
    this.allRestaurantsArrSubject.asObservable();

  getAllRestaurants() {
    this.dbAllRestaurants().subscribe((data) => {
      this.allRestaurantsArrSubject.next(data);
    });
  }
//lll
  dbAllRestaurants(): Observable<any> {
    return this.http.get(`http://localhost:3000/restaurants/allRestaurants`);
  }
  findChef(): Observable<any> {
    return this.http.get(`http://localhost:3000/chef/findChef/Shitrit`);
  }
}

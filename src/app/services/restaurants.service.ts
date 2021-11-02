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

  allRestaurantsArrSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  allDishesSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  $allRestaurantsArr: Observable<any[]> =this.allRestaurantsArrSubject.asObservable();

  $allDishes: Observable<any[]> = this.allDishesSubject.asObservable();

  getAllRestaurants() {
    this.dbAllRestaurants().subscribe((data) => {
      this.allRestaurantsArrSubject.next(data);
    });
  }

  getAllDishes() {
    this.allDishes().subscribe((data) => {
      this.allDishesSubject.next(data);
    });
  }

  dbAllRestaurants(): Observable<any> {
    return this.http.get(
      `http://localhost:3000/restaurants/readAllRestaurants`
    );
  }

  findChef(): Observable<any> {
    return this.http.get(`http://localhost:3000/chef/readFindChef/618105c865292eca59830e68`);
  }

  allDishes(): Observable<any> {
    return this.http.get(`http://localhost:3000/dish/readAllDishes`);
  }
}

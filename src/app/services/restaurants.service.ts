import { Injectable } from '@angular/core';
import { IconsService } from './icons.service';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { GlobalService } from './global.service';
@Injectable({
  providedIn: 'root',
})
export class RestaurantsService {
  constructor(
    public iconsService: IconsService,
    public globalService: GlobalService,
    public http: HttpClient
  ) {}

  localHost = this.globalService.localHost;

  allRestaurantsArrSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(
    []
  );
  $allRestaurantsArr: Observable<any[]> =
    this.allRestaurantsArrSubject.asObservable();

  allDishesSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  $allDishes: Observable<any[]> = this.allDishesSubject.asObservable();

  allUserDishesSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  $allUserDishes: Observable<any[]> = this.allUserDishesSubject.asObservable();
  
  chefSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  $chef: Observable<any[]> = this.chefSubject.asObservable();

  allChefsSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  $allChefs: Observable<any[]> = this.allChefsSubject.asObservable();

  getChef() {
    this.findChef().subscribe((data: any) => {
      this.chefSubject.next(data);
    });
  }

  getAllRestaurants() {
    this.dbAllRestaurants().subscribe((data) => {
      this.allRestaurantsArrSubject.next(data);
    });
  }

  getAllUserDishes() {
    this.allDishesss().subscribe((data) => {
      this.allUserDishesSubject.next(data);
    });
  }

  getAllDishes() {
    this.allDishes().subscribe((data) => {
      this.allDishesSubject.next(data);
    });
  }
  getAllChefs() {
    this.allChefs().subscribe((data) => {
      this.allChefsSubject.next(data);
    });
  }
  dbAllRestaurants(): Observable<any> {
    return this.http.get(`${this.localHost}restaurants/readAllRestaurants`);
  }

  findChef(): Observable<any> {
    return this.http.get(
      `${this.localHost}chef/readFindChef/618105c865292eca59830e68`
    );
  }

  allDishesss(): Observable<any> {
    return this.http.get(`${this.localHost}dish/readAllDishes`);
  }
  allDishes(): Observable<any> {
    return this.http.get(
      `${this.localHost}restaurants/findRestaurantsWithDishes`
    );
  }
  allChefs(): Observable<any> {
    return this.http.get(`${this.localHost}chef/allChefs`);
  }
}

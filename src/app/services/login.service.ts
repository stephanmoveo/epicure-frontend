import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalService } from './global.service';
import { RestaurantsService } from './restaurants.service';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    public http: HttpClient,
    public globalService: GlobalService,
    public restaurantsService: RestaurantsService
  ) {}

  localHost = this.globalService.userLocalHost;

  fetchAllUserData() {
    this.restaurantsService.getAllUserDishes();
    this.restaurantsService.getAllChefs();
    this.restaurantsService.getChef();
    this.restaurantsService.getAllRestaurants();
    this.restaurantsService.getAllDishes();
  }

  login(obj: any): Observable<any> {
    return this.http.post(`${this.localHost}user/login`, obj);
  }
}

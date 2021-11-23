import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { RestaurantsService } from './restaurants.service';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(
    public restaurantsService: RestaurantsService,
    public http: HttpClient,
    public globalService:GlobalService
  ) {}
  isCategoryModal: string = '';

  isModal: Boolean = false;

  modalData: any;

  rests: any;

  localHost = this.globalService.localHost;

  isModalOpen() {
    return this.isModal ? (this.isModal = false) : (this.isModal = true);
  }

  deleteChef(id: any): Observable<any> {
    return this.http.get(
      `${this.localHost}chef/deleteChef/${id}`
    );
  }

  updateChef(obj: Object){
    return this.http.post<any>(
      `${this.localHost}chef/updateChef`,
      obj
    );
  }

  createChef(obj: Object){
    return this.http.post<any>(
      `${this.localHost}chef/createChef`,
      obj
    );
  }

  deleteDish(id: any): Observable<any> {
    return this.http.get(
      `${this.localHost}dish/deleteDish/${id}`
    );
  }

  updateDish(obj: Object): Observable<any> {
    return this.http.post<any>(
      `${this.localHost}dish/updateDish`,
      obj
    );
  }

  createDish(obj: Object) {
    return this.http.post<any>(
      `${this.localHost}dish/createDish`,
      obj
    );
  }

  createRestaurant(obj: Object) {
    return this.http.post<any>(
      `${this.localHost}restaurants/createRestaurant`,
      obj
    );
  }

  updateRestaurant(obj: Object): Observable<any> {
    return this.http.post<any>(
      `${this.localHost}restaurants/updateRestaurant`,
      obj
    );
  }

  deleteRset(id: any): Observable<any> {
    return this.http.get(
      `${this.localHost}restaurants/deleteRestaurant/${id}`
    );
  }
}

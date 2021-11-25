import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalService } from './global.service';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(public http: HttpClient, public globalService: GlobalService) {}

  localHost = this.globalService.userLocalHost;

  login(obj: any): Observable<any> {
    return this.http.post(`${this.localHost}user/login`, obj);
  }
}

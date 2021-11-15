import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http: HttpClient) { }

  localHost: string = 'http://localhost:3000/';


  login(obj:any): Observable<any> {
    return this.http.post(`${this.localHost}user/login`, obj);
  }
}

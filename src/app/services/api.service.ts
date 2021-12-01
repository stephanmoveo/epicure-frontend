import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHandlerService } from './http-handler.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService extends HttpHandlerService {
  login(params: any): Observable<any> {
    const url = 'user/login';
    return this.post(url, params);
  }
}

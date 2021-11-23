import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  headers: BehaviorSubject<any>;

  constructor() {
    this.headers = new BehaviorSubject<any>(null);
  }

  updateHeader(key :any, value: string) {
    this.headers.next({ key, value });
  }
}
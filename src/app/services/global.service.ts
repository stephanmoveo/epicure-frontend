import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }

  isMobile = window.navigator.userAgent.toLowerCase().includes('mobile')
}

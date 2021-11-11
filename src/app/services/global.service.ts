import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  constructor(
    public router: Router,
    ) {}
  isMobile = window.navigator.userAgent.toLowerCase().includes('mobile');
  isAdmin: boolean = false;

  logOut() {
    localStorage.clear();
    this.isAdmin = false
    this.router.navigate(['']);
  }
}

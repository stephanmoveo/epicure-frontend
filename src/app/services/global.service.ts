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
  localHost: string = 'http://3.21.27.193/api/admin/';
  // localHost: string = 'http://localhost:3000/api/admin/';
  userLocalHost: string = 'http://3.21.27.193/api/';
  // userLocalHost: string = 'http://localhost:3000/api/';
  user = JSON.parse(localStorage.getItem('token') as any);

  logOut() {
    localStorage.clear();
    this.isAdmin = false;
    this.router.navigate(['']);
  }
}

import { Component, OnInit } from '@angular/core';
import { token } from '../../shared/interfaces/tokenInterface';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(public router: Router) {}
  ngOnInit(): void {}
  login(obj: token, e:any) {
    e.preventDefault();
    
    if (obj.password === '') return alert('must fill password');
    if (obj.password === 'admin') {
      localStorage.setItem(
        'token',
        JSON.stringify({
          userName: obj.userName,
          password: obj.password,
          admin: true,
        })
      );
      this.router.navigate(['admin']);
    } else {
      localStorage.setItem(
        'token',
        JSON.stringify({
          userName: obj.userName,
          password: obj.password,
          admin: false,
        })
      );
      this.router.navigate(['homepage']);
    }
  }
}

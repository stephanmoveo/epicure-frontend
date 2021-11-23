import { Component, OnInit } from '@angular/core';
// import { token } from '../../shared/interfaces/tokenInterface';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { GlobalService } from 'src/app/services/global.service';
import { LoginService } from 'src/app/services/login.service';
import { RestaurantsService } from 'src/app/services/restaurants.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    public router: Router,
    public globalService: GlobalService,
    public loginService: LoginService,
    public restaurantsService: RestaurantsService,
    public apiService: ApiService
  ) {
    this.restaurantsService.getAllChefs();
  }
  ngOnInit(): void {}

  login(obj: any) {
    // e.preventDefault();
    console.log(obj);
    
    if (obj.password === '') return alert('must fill password');
    this.loginService.login(obj).subscribe((res: any) => {
      if (res.succes) {
        if (res.token.user.admin) {
          localStorage.setItem('token', JSON.stringify(res.token.token));
          this.router.navigate(['admin']);
        } else {
          localStorage.setItem('token', JSON.stringify(res.token.token));
          this.globalService.isAdmin = true;
          this.router.navigate(['homepage']);
        }
      } else {
        alert('wrong password');
      }
    });
  }
}

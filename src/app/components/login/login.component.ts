import { Component, OnInit } from '@angular/core';
// import { token } from '../../shared/interfaces/tokenInterface';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
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
    public apiService: ApiService,
    public appComponent: AppComponent
  ) {
    // this.restaurantsService.getAllChefs();
  }
  ngOnInit(): void {}

  login(obj: any, e: any) {
    e.preventDefault();
    if (obj.password === '') return alert('must fill password');
    this.loginService.login(obj).subscribe((res: any) => {
      if (res.succes) {
        if (res.token.user.admin) {
          localStorage.setItem('token', JSON.stringify(res.token.token));
          this.router.navigate(['admin']);
          this.loginService.fetchAllUserData();
        } else {
          localStorage.setItem('token', JSON.stringify(res.token.token));
          this.globalService.isAdmin = true;
          this.router.navigate(['homepage']);
          this.loginService.fetchAllUserData();
        }
      } else {
        alert('wrong password');
      }
    });
  }
}

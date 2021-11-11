import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';
import { IconsService } from 'src/app/services/icons.service';
import { RestaurantsService } from 'src/app/services/restaurants.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  constructor(
    public iconsService: IconsService,
    public restaurantsService: RestaurantsService,
    public router: Router,
    public globalService: GlobalService
  ) {
    if (this.router.url === '/homepage') this.globalService.isAdmin = true;

  }
  ngOnInit(): void {
  }
}

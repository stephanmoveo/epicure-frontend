import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slider, fader } from './animations';
import { GlobalService } from './services/global.service';
import { RestaurantsService } from './services/restaurants.service';
import { SwiperService } from './services/swiper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slider],
})
export class AppComponent implements OnInit {
  constructor(
    public swiperService: SwiperService,
    public globalService: GlobalService,
    public restaurantsService:RestaurantsService
  ) {}

  title = 'epicure-app';

  active = false;
  prepareRoute(outlet: RouterOutlet) {
    if (this.globalService.isMobile)
      return (
        outlet &&
        outlet.activatedRouteData &&
        outlet.activatedRouteData['animation']
      );
  }
  ngOnInit() {
    this.restaurantsService.getAllRestaurants();
    this.restaurantsService.getAllDishes()
  }
}

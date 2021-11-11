import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from 'src/app/services/restaurants.service';
import { SwiperService } from 'src/app/services/swiper.service';

@Component({
  selector: 'app-all-restaurants',
  templateUrl: './all-restaurants.component.html',
  styleUrls: ['./all-restaurants.component.scss'],
})
export class AllRestaurantsComponent implements OnInit {
  constructor(
    public restaurantsService: RestaurantsService,
    public swiperService: SwiperService
  ) {
    this.restaurantsService.$allRestaurantsArr.subscribe((data) => {
      this.rests = data;
    });
  }
  rests: any;
  ngOnInit(): void {}
}

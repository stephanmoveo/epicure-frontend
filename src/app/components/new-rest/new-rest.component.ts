import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from 'src/app/services/restaurants.service';
import { SwiperService } from 'src/app/services/swiper.service';

@Component({
  selector: 'app-new-rest',
  templateUrl: './new-rest.component.html',
  styleUrls: ['./new-rest.component.scss']
})
export class NewRestComponent implements OnInit {

  constructor(
    public restaurantsService: RestaurantsService,
    public swiperService: SwiperService
  ) { }

  ngOnInit(): void {
  }

}

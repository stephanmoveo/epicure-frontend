import { Component, OnInit } from '@angular/core';
import { IconsService } from 'src/app/services/icons.service';
import { RestaurantsService } from 'src/app/services/restaurants.service';
import { SwiperService } from 'src/app/services/swiper.service';

@Component({
  selector: 'app-chefs',
  templateUrl: './chefs.component.html',
  styleUrls: ['./chefs.component.scss']
})
export class ChefsComponent implements OnInit {

  constructor(
    public restaurantsService: RestaurantsService,
    public swiperService: SwiperService
  ) { }

  ngOnInit(): void {
    // console.log(this.swiperService.config);
    
  }

}

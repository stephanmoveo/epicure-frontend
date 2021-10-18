import { Component, OnInit } from '@angular/core';
import { IconsService } from 'src/app/services/icons.service';
import { RestaurantsService } from 'src/app/services/restaurants.service';
import { SwiperService } from 'src/app/services/swiper.service';
import { PopularRestComponent } from '../popular-rest.component';

@Component({
  selector: 'app-bottom-banner',
  templateUrl: './bottom-banner.component.html',
  styleUrls: ['./bottom-banner.component.scss']
})
export class BottomBannerComponent implements OnInit {

  constructor(
    public restaurantsService: RestaurantsService,
    public iconsService: IconsService,
    public swiperService: SwiperService
  ) { }

  ngOnInit(): void {
  }



}

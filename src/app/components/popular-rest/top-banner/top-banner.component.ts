import { Component, HostListener, OnInit } from '@angular/core';
import { IconsService } from 'src/app/services/icons.service';
import { RestaurantsService } from 'src/app/services/restaurants.service';
import { SwiperService } from 'src/app/services/swiper.service';
@Component({
  selector: 'app-top-banner',
  templateUrl: './top-banner.component.html',
  styleUrls: ['./top-banner.component.scss', '../popular-rest.component.scss']
})
export class TopBannerComponent implements OnInit {

  constructor(
    public restaurantsService: RestaurantsService,
    public iconsService: IconsService,
    public swiperService: SwiperService
  ) { }

  get filteredArr() {
    const sliced = this.restaurantsService.restaurantsArr.restArr
    return sliced
  }

  ngOnInit(): void {
    this.swiperService.cloneConfig()
  }

}

import { Injectable } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root',
})
export class SwiperService {
  constructor(public globalService: GlobalService) {}

  cloneConfig() {
    if (this.globalService.isMobile) {
      const newConfig2 = { ...this.config2, slidesPerView: 2.5 };
      const newConfig = { ...this.config, slidesPerView: 1.5 };
      this.config2 = newConfig2;
      this.config = newConfig;
    } else {
      this.config = { ...this.config, slidesPerView: 3 };
      this.config2 = { ...this.config2, slidesPerView: 3 };
    }
  }

  public config2: SwiperConfigInterface = {
    a11y: true,
    direction: 'horizontal',
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    spaceBetween: 20,
    loop: true,
  };
  public config: SwiperConfigInterface = {
    loop: true,
    a11y: true,
    direction: 'horizontal',
    spaceBetween: 11,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
  };
}

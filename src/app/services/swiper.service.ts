import { HostListener, Injectable } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Injectable({
  providedIn: 'root'
})
export class SwiperService {

  constructor() { }

  public innerWidth: any;
  @HostListener('window:resize', ['$event'])
  cloneConfig() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth <= 728) {
      const newConfig2 = { ...this.config2, slidesPerView: 2.5 }
      const newConfig = { ...this.config, slidesPerView: 1.5 }
      this.config2 = newConfig2
      this.config = newConfig
      console.log(newConfig2);
      
    }
    else {
      this.config = { ...this.config, slidesPerView: 3 }
      this.config2 = { ...this.config, slidesPerView: 3 }
      console.log(this.config2);
    }

  }
  public config2: SwiperConfigInterface = {
    a11y: true,
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    // navigation: true,
    pagination: true
};
  public config: SwiperConfigInterface = {
    a11y: true,
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    // navigation: true,
    pagination: true
};
}

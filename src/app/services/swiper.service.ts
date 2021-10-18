import { Injectable } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Injectable({
  providedIn: 'root'
})
export class SwiperService {

  constructor() { }

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

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slider, fader } from './animations';
import { SwiperService } from './services/swiper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slider]
})
export class AppComponent {

  constructor(public swiperService: SwiperService) { }

  title = 'epicure-app';

  active = false
  prepareRoute(outlet: RouterOutlet) {
    console.log(window.navigator.userAgent.toLowerCase().includes('mobile'))
    if (this.swiperService.innerWidth <= 728)
      return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation']
  }

}

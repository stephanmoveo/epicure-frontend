import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slider, fader } from './animations';
import { GlobalService } from './services/global.service';
import { SwiperService } from './services/swiper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slider]
})
export class AppComponent {

  constructor(public swiperService: SwiperService, public globalService: GlobalService) { }

  title = 'epicure-app';

  active = false
  prepareRoute(outlet: RouterOutlet) {
    console.log(this.globalService.isMobile);
    
    if (this.globalService.isMobile)
      return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation']
  }

}

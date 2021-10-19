import { Component, HostListener, OnInit } from '@angular/core';
import { IconsService } from 'src/app/services/icons.service';
import { RestaurantsService } from 'src/app/services/restaurants.service';
import { SwiperService } from 'src/app/services/swiper.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-chefs',
  templateUrl: './chefs.component.html',
  styleUrls: ['./chefs.component.scss'],
  animations: [
    // Each unique animation requires its own trigger. The first argument of the trigger function is the name
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0)' })),
      state('rotated', style({ transform: 'rotate(-360deg)' })),
      transition('rotated => default', animate('2000ms ease-out')),
      transition('default => rotated', animate('2000ms ease-in'))
    ])
  ]
})
export class ChefsComponent implements OnInit {

  state: string = 'default';
  rotate() {
    this.state = (this.state === 'default' ? 'rotated' : 'default');
  }
  constructor(
    public restaurantsService: RestaurantsService,
    public swiperService: SwiperService
  ) { }
  @HostListener('window:resize', ['$event'])

  ngOnInit(): void {
    // console.log(this.swiperService.config);

  }

}

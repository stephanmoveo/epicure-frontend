import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from 'src/app/services/restaurants.service';
import { SwiperService } from 'src/app/services/swiper.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-chefs',
  templateUrl: './chefs.component.html',
  styleUrls: ['./chefs.component.scss'],
  animations: [
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0)' })),
      state('rotated', style({ transform: 'rotate(-360deg)' })),
      transition('rotated => default', animate('2000ms ease-out')),
      transition('default => rotated', animate('2000ms ease-in')),
    ]),
  ],
})
export class ChefsComponent implements OnInit {
  state: string = 'default';
  rotate() {
    this.state = this.state === 'default' ? 'rotated' : 'default';
  }
  constructor(
    public restaurantsService: RestaurantsService,
    public swiperService: SwiperService
  ) {
    this.restaurantsService.$chef.subscribe((res) => {
      this.chefArr = res;
      console.log(res);
    });
  }

  chefArr = [] as any;

  get dishes() {
    if (this.chefArr.length === 0) return;

    const { restaurants } = this.chefArr[0];
    return restaurants;
  }

  ngOnInit(): void {}
}

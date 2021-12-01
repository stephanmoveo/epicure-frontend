import { Component, Input, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { IconsService } from 'src/app/services/icons.service';
import { RestaurantsService } from 'src/app/services/restaurants.service';

@Component({
  selector: 'app-rest-dish-card',
  templateUrl: './rest-dish-card.component.html',
  styleUrls: ['./rest-dish-card.component.scss'],
})
export class RestDishCardComponent implements OnInit {
  constructor(
    public iconsService: IconsService,
    public restaurantsService: RestaurantsService
  ) {}

  @Input() item = [] as any;

  get filterArr() {
    if (!this.item) return;
    return this.item.dishes.length > 0;
  }

  ngOnInit(): void {
    this.filterArr;
  }
}

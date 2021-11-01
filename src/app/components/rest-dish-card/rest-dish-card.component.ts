import { Component, Input, OnInit } from '@angular/core';
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

  ngOnInit(): void {    
  }
}

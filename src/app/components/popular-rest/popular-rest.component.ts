import { Component, OnInit } from '@angular/core';
import { IconsService } from 'src/app/services/icons.service';
import { RestaurantsService } from 'src/app/services/restaurants.service';

@Component({
  selector: 'app-popular-rest',
  templateUrl: './popular-rest.component.html',
  styleUrls: ['./popular-rest.component.scss'],
})
export class PopularRestComponent implements OnInit {
  constructor(
    public restaurantsService: RestaurantsService,
    public iconsService: IconsService
  ) {}

  ngOnInit(): void {}
}

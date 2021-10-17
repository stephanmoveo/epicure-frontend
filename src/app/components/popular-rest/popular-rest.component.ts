import { Component, OnInit } from '@angular/core';
import { IconsService } from 'src/app/services/icons.service';
import { RestaurantsService } from 'src/app/services/restaurants.service';

@Component({
  selector: 'app-popular-rest',
  templateUrl: './popular-rest.component.html',
  styleUrls: ['./popular-rest.component.scss']
})
export class PopularRestComponent implements OnInit {

  constructor(public restaurantsService: RestaurantsService, public iconsService: IconsService) { }
  // arr = [1, 2, 3, 4, 5]

  get filteredArr() {
    const sliced = this.restaurantsService.restaurantsArr.slice(0, 3)
    console.log('okkk');
    return sliced
  }
  ngOnInit(): void {
  }



}

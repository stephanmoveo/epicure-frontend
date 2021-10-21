import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from 'src/app/services/restaurants.service';

@Component({
  selector: 'app-rest-nav',
  templateUrl: './rest-nav.component.html',
  styleUrls: ['./rest-nav.component.scss']
})
export class RestNavComponent implements OnInit {

  constructor(public restaurantsService:RestaurantsService) { }

  ngOnInit(): void {
  }
  menuLinksArr = [
    'All',
    'New',
    'Most Popular',
    'Open Now'
  ]
}

import { Component, OnInit } from '@angular/core';
import { IconsService } from 'src/app/services/icons.service';
// import { ImagesService } from 'src/app/services/images.service';
import { RestaurantsService } from 'src/app/services/restaurants.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(public iconsService: IconsService, public restaurantsService:RestaurantsService) { }

  ngOnInit(): void {
  }

}

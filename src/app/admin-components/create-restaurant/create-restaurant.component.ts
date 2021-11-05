import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { RestaurantsService } from 'src/app/services/restaurants.service';

@Component({
  selector: 'app-create-restaurant',
  templateUrl: './create-restaurant.component.html',
  styleUrls: ['./create-restaurant.component.scss'],
})
export class CreateRestaurantComponent implements OnInit {
  constructor(
    public adminService: AdminService,
    public restaurantsService: RestaurantsService
  ) {}

  ngOnInit(): void {}

  createRestaurant(obj: Object) {
    this.adminService.createRestaurant(obj).subscribe()
  }
}

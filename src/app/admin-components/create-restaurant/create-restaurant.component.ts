import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    public restaurantsService: RestaurantsService,
    public router: Router
  ) {
    this.restaurantsService.$allChefs.subscribe((res) => {
      this.allChefs = res;
    });
  }
  allChefs: any;
  ngOnInit(): void {}

  createRestaurant(obj: any) {
    this.adminService.createRestaurant(obj).subscribe((data: any) => {
      if (data.succses) {
        this.restaurantsService.getAllRestaurants();
        this.router.navigate(['admin/adminRestaurants']);
        alert('Restaurant created !!');
      }
      if (data.error) return alert('Must fill all fields');
    });
  }
}

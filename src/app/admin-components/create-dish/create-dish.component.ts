import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { RestaurantsService } from 'src/app/services/restaurants.service';

@Component({
  selector: 'app-create-dish',
  templateUrl: './create-dish.component.html',
  styleUrls: ['./create-dish.component.scss'],
})
export class CreateDishComponent implements OnInit {
  constructor(
    public adminService: AdminService,
    public restaurantsService: RestaurantsService,
    public router: Router
  ) {
    this.restaurantsService.$allRestaurantsArr.subscribe((res) => {
      this.restaurants = res;
    });
  }

  ngOnInit(): void {}
  restaurants: any;
  createDish(obj: Object) {
    this.adminService.createDish(obj).subscribe((data) => {
      if (data.succses) {
        this.restaurantsService.getAllDishes();
        this.router.navigate(['admin/adminDishes']);
        return alert('dish created !!');
      }
      if (data.error) return alert('Must fill all fields');
    });
  }
}

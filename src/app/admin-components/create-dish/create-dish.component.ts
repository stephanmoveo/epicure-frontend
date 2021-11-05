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
  ) {}

  ngOnInit(): void {}

  createDish(obj: Object) {
    this.adminService.createDish(obj).subscribe((data) => {
      if (data.succses) {
        this.restaurantsService.getAllDishes();
        this.router.navigate(['admin/adminDishes']);
        alert('dish created !!');
      }
    });
  }
}

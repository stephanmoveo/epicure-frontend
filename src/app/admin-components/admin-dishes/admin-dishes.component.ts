import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { RestaurantsService } from 'src/app/services/restaurants.service';

@Component({
  selector: 'app-admin-dishes',
  templateUrl: './admin-dishes.component.html',
  styleUrls: ['./admin-dishes.component.scss'],
})
export class AdminDishesComponent implements OnInit {
  constructor(
    public restaurantsService: RestaurantsService,
    public adminService: AdminService
  ) {
    this.restaurantsService.$allDishes.subscribe((res) => {
      this.dishes = res;
    });
  }

  dishes: any;

  get filterDishes() {
    if (!this.dishes) return;
    const dishesRests = this.dishes.filter(
      (dish: any) => dish.dishes.length > 0
    );
    return dishesRests;
  }

  getItemsInModal(dish: any, cat: string) {
    console.log(dish);
    
    this.adminService.isCategoryModal = cat;
    this.adminService.modalData = dish;
    this.adminService.isModalOpen();
  }

  ngOnInit(): void {}
}

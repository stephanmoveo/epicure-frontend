import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { RestaurantsService } from 'src/app/services/restaurants.service';

@Component({
  selector: 'app-chef-modal-card',
  templateUrl: './chef-modal-card.component.html',
  styleUrls: ['./chef-modal-card.component.scss'],
})
export class ChefModalCardComponent implements OnInit {
  constructor(
    public restaurantsService: RestaurantsService,
    public adminService: AdminService
  ) {}

  ngOnInit(): void {}
  updateChef(obj: Object) {
    this.adminService.updateChef(obj).subscribe(() => {
      this.adminService.isModalOpen();
      this.restaurantsService.getAllChefs();
    });
  }
  deleteChef(id: any) {    
    if(confirm("Are you sure to delete chef?"))    
    this.adminService.deleteChef(id).subscribe(() => {
      this.adminService.isModalOpen();
      this.restaurantsService.getAllChefs();
      this.restaurantsService.getAllDishes()
      this.restaurantsService.getAllRestaurants()
    });
  }
}

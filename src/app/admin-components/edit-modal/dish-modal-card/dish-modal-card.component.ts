import { Component, Input, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { RestaurantsService } from 'src/app/services/restaurants.service';

@Component({
  selector: 'app-dish-modal-card',
  templateUrl: './dish-modal-card.component.html',
  styleUrls: ['./dish-modal-card.component.scss'],
})
export class DishModalCardComponent implements OnInit {
  constructor(
    public adminService: AdminService,
    public restaurantsService: RestaurantsService
  ) {}
  updateDish(obj: Object) {
    this.adminService.updateDish(obj).subscribe(()=>{
      this.adminService.isModalOpen();
      this.restaurantsService.getAllDishes();
    })
  }
  deleteDish(id: any) {  
    if(confirm("Are you sure to delete dish?"))      
    this.adminService.deleteDish(id).subscribe(() => {
      this.adminService.isModalOpen();
      this.restaurantsService.getAllDishes();
    });
  }
  ngOnInit(): void {}
}

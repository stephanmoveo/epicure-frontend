import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { RestaurantsService } from 'src/app/services/restaurants.service';
// import rests from '../../admin-restaurants/admin-restaurants.component';

@Component({
  selector: 'app-modal-card',
  templateUrl: './modal-card.component.html',
  styleUrls: ['./modal-card.component.scss'],
})
export class ModalCardComponent implements OnInit {
  constructor(
    public adminService: AdminService,
    public http: HttpClient,
    public restaurantsService: RestaurantsService
  ) {
    this.restaurantsService.$allChefs.subscribe((res) => {
      this.allChefs = res;
    });
  }
  allChefs: any;

  updateRestaurant(obj: Object) {
    this.adminService.updateRestaurant(obj).subscribe(() => {
      this.adminService.isModalOpen();
      this.restaurantsService.getAllRestaurants();
    });
  }

  deleteRest(id: any) {
    if (confirm('Are you sure to delete restaurant?'))
      this.adminService.deleteRset(id).subscribe(() => {
        this.adminService.isModalOpen();
        this.restaurantsService.getAllRestaurants();
      });
  }
  ngOnInit(): void {}
}

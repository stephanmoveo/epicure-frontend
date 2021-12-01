import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { RestaurantsService } from 'src/app/services/restaurants.service';

@Component({
  selector: 'app-admin-restaurants',
  templateUrl: './admin-restaurants.component.html',
  styleUrls: ['./admin-restaurants.component.scss'],
})
export class AdminRestaurantsComponent implements OnInit {
  constructor(
    public restaurantsService: RestaurantsService,
    public adminService: AdminService
  ) {
    this.restaurantsService.$allRestaurantsArr.subscribe((data) => {
      this.rests = data;      
    });
  }

  getItemsInModal(rest: any, cat:string) {    
    this.adminService.isCategoryModal = cat
    this.adminService.modalData = rest;
    this.adminService.isModalOpen();
  }
  rests: any;
  ngOnInit(): void {}
}
//TODO - onItemsClick
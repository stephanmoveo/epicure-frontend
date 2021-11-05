import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { RestaurantsService } from 'src/app/services/restaurants.service';

@Component({
  selector: 'app-admin-chefs',
  templateUrl: './admin-chefs.component.html',
  styleUrls: ['./admin-chefs.component.scss'],
})
export class AdminChefsComponent implements OnInit {
  constructor(
    public restaurantsService: RestaurantsService,
    public adminService: AdminService
  ) {
    this.restaurantsService.$allChefs.subscribe((res) => {
      this.chefsArr = res;
    });
  }

  chefsArr: any;
  getItemsInModal(chef: any, cat:string) {
    this.adminService.isCategoryModal = cat;
    this.adminService.modalData = chef;
    this.adminService.isModalOpen();
  }

  ngOnInit(): void {}
}

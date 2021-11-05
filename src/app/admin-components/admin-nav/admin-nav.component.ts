import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { IconsService } from 'src/app/services/icons.service';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.scss'],
})
export class AdminNavComponent implements OnInit {
  constructor(
    public globalService: GlobalService,
    public iconsService: IconsService
  ) {}
  navLinksArr = [
    { id: '1', name: 'Edit Restaurant', to: 'adminRestaurants' },
    { id: '2', name: 'Edit Chef', to: 'adminChefs' },
    { id: '3', name: 'Edit Dish', to: 'adminDishes' },
    { id: '4', name: 'Create Restaurant', to: 'createRestaurant' },
    { id: '5', name: 'Create Dish', to: 'createDish' },
    { id: '6', name: 'Create Chef', to: 'createChef' },
  ];
  ngOnInit(): void {}
}

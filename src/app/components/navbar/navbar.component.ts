import { Component, OnInit } from '@angular/core';
import { IconsService } from 'src/app/services/icons.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(
    public iconsService: IconsService,
    public globalService: GlobalService
  ) {}

  navLinksArr = [
    { id: '1', name: 'Restaurants', to: 'restaurants' },
    { id: '2', name: 'Chefs', to: 'Chefs' },
  ];
  ngOnInit(): void {}
}

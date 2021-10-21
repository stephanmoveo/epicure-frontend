import { Component, OnInit } from '@angular/core';
import { IconsService } from 'src/app/services/icons.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public iconsService: IconsService) { }

  navLinksArr = [
    { name: 'Restaurants', to: 'All' },
    { name: 'Chefs', to: 'Chefs' },
  ]

  status: boolean = true

  clickEvent() {
    this.status = !this.status;
  }

  ngOnInit(): void {
  }
}

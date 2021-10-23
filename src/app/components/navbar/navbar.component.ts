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
    { name: 'restaurants', to: 'restaurants',  },
    { name: 'chefs', to: 'Chefs' },
  ]

  ngOnInit(): void {
  }
}

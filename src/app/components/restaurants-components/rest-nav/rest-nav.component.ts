import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rest-nav',
  templateUrl: './rest-nav.component.html',
  styleUrls: ['./rest-nav.component.scss']
})
export class RestNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  menuLinksArr = [
    'All',
    'New',
    'Most Popular',
    'Open Now'
  ]
}

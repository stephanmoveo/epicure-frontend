import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rest-dish-card',
  templateUrl: './rest-dish-card.component.html',
  styleUrls: ['./rest-dish-card.component.scss']
})
export class RestDishCardComponent implements OnInit {

  constructor() { }
  
  @Input() item = [] as any;

  ngOnInit(): void {
  }

}

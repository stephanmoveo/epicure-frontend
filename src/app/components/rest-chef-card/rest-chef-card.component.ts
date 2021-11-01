import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rest-chef-card',
  templateUrl: './rest-chef-card.component.html',
  styleUrls: ['./rest-chef-card.component.scss']
})
export class RestChefCardComponent implements OnInit {

  constructor() { }
  
  @Input() item = [] as any;

  ngOnInit(): void {    
  }

}

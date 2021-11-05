import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chef-card',
  templateUrl: './chef-card.component.html',
  styleUrls: ['./chef-card.component.scss'],
})
export class ChefCardComponent implements OnInit {
  constructor() {}
  @Input() item = [] as any;
  ngOnInit(): void {}
}

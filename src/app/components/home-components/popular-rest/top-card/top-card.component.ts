import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-card',
  templateUrl: './top-card.component.html',
  styleUrls: ['./top-card.component.scss','../top-banner/top-banner.component.scss', '../popular-rest.component.scss']
})
export class TopCardComponent implements OnInit {

  constructor() { }

  @Input() item = [] as any;

  ngOnInit(): void {
  }

}

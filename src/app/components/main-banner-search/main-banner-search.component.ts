import { Component, OnInit } from '@angular/core';
import { IconsService } from 'src/app/services/icons.service';

@Component({
  selector: 'app-main-banner-search',
  templateUrl: './main-banner-search.component.html',
  styleUrls: ['./main-banner-search.component.scss']
})
export class MainBannerSearchComponent implements OnInit {

  constructor(public iconsService: IconsService) { }

  currentItem = 'inputFont';

  ngOnInit(): void {
  }

}

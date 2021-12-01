import { Component, OnInit } from '@angular/core';
import { IconsService } from 'src/app/services/icons.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor(public iconsService: IconsService) {}

  ngOnInit(): void {}
  storeArr = [
    {
      logo: this.iconsService.appleIcon,
      txt: 'Download on the',
      at: 'App Store',
      alt: 'apple-logo',
    },
    {
      logo: this.iconsService.playIcon,
      txt: 'Get it on',
      at: 'Google Play',
      alt: 'google-logo',
    },
  ];
}

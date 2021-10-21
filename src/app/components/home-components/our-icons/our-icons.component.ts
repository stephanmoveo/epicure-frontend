import { Component, OnInit } from '@angular/core';
import { IconsService } from 'src/app/services/icons.service';
import { Icons } from '../../../shared/interfaces/iconsInterface'
@Component({
  selector: 'app-our-icons',
  templateUrl: './our-icons.component.html',
  styleUrls: ['./our-icons.component.scss']
})
export class OurIconsComponent implements OnInit {

  constructor(public iconsService: IconsService) { }

  ngOnInit(): void {
  }
  ourIconsArr: Icons[] = [
    {
      img: this.iconsService.spicyIcon,
      type: 'Spicy'
    },
    {
      img: this.iconsService.vegeterian,
      type: 'Vegeterian'
    },
    {
      img: this.iconsService.veganIcon,
      type: 'Vegan'
    },
  ];
}

import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Input() item = 'input1';

  constructor() { }

  ngOnInit(): void {
  }

}

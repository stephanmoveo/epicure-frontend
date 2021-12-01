import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { RestaurantsService } from 'src/app/services/restaurants.service';

@Component({
  selector: 'app-create-chef',
  templateUrl: './create-chef.component.html',
  styleUrls: ['./create-chef.component.scss'],
})
export class CreateChefComponent implements OnInit {
  constructor(
    public adminService: AdminService,
    public restaurantsService: RestaurantsService,
    public router: Router
  ) {}

  ngOnInit(): void {}
  createChef(obj: Object) {
    this.adminService.createChef(obj).subscribe((data) => {
      if (data.succses) {
        this.restaurantsService.getAllChefs();
        this.router.navigate(['admin/adminChefs']);
        alert('chef created !!');
      }
      if (data.error) return alert('Must fill all fields');
    });
  }
}

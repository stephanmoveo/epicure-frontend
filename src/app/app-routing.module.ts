import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllRestaurantsComponent } from './components/all-restaurants/all-restaurants.component';
import { NewRestComponent } from './components/new-rest/new-rest.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { RestaurantsPageComponent } from './pages/restaurants-page/restaurants-page.component';

const routes: Routes = [
  { path: '', component: HomepageComponent, data: { animation: 'isLeft' } },
  {
    path: 'restaurants', component: RestaurantsPageComponent, data: { animation: 'isRight' },
    children: [
      { path: 'All', component: AllRestaurantsComponent },
      { path: 'New', component: NewRestComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

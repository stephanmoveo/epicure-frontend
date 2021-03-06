import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllChefsComponent } from './components/all-chefs/all-chefs.component';
import { AllRestaurantsComponent } from './components/all-restaurants/all-restaurants.component';
import { NewRestComponent } from './components/new-rest/new-rest.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { RestaurantsPageComponent } from './pages/restaurants-page/restaurants-page.component';

const routes: Routes = [
  { path: '', component: HomepageComponent, data: { animation: 'isLeft' } },
  {
    path: 'restaurants', component: RestaurantsPageComponent, data: { animation: 'isRight' },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'All'
     },
      { path: 'All', component: AllRestaurantsComponent },
      { path: 'New', component: NewRestComponent }
    ]
  },
  { path: 'Chefs', component: AllChefsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}


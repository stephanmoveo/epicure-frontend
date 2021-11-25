import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminRestaurantsComponent } from './admin-components';
import { AdminChefsComponent } from './admin-components/admin-chefs/admin-chefs.component';
import { AdminDishesComponent } from './admin-components/admin-dishes/admin-dishes.component';
// import { AdminRestaurantsComponent } from './admin-components/admin-restaurants/admin-restaurants.component';
import { CreateChefComponent } from './admin-components/create-chef/create-chef.component';
import { CreateDishComponent } from './admin-components/create-dish/create-dish.component';
import { CreateRestaurantComponent } from './admin-components/create-restaurant/create-restaurant.component';
import { AllChefsComponent } from './components/all-chefs/all-chefs.component';
import { AllRestaurantsComponent } from './components/all-restaurants/all-restaurants.component';
import { LoginComponent } from './components/login/login.component';
import { NewRestComponent } from './components/new-rest/new-rest.component';
import { AdminPageComponent } from './pages/admin-page/admin-page/admin-page.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { RestaurantsPageComponent } from './pages/restaurants-page/restaurants-page.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'homepage',
    component: HomepageComponent,
    data: { animation: 'isLeft' },
  },
  {
    path: 'restaurants',
    component: RestaurantsPageComponent,
    data: { animation: 'isRight' },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'All',
      },
      { path: 'All', component: AllRestaurantsComponent },
      { path: 'New', component: NewRestComponent },
    ],
  },
  { path: 'Chefs', component: AllChefsComponent },
  {
    path: 'admin',
    component: AdminPageComponent,
    
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'adminRestaurants',
      },
      { path: 'adminRestaurants', component: AdminRestaurantsComponent },
      { path: 'adminDishes', component: AdminDishesComponent },
      { path: 'adminChefs', component: AdminChefsComponent },
      { path: 'createRestaurant', component: CreateRestaurantComponent },
      { path: 'createDish', component: CreateDishComponent },
      { path: 'createChef', component: CreateChefComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NextpageComponent } from './pages/nextpage/nextpage.component';
import { RestaurantsPageComponent } from './pages/restaurants-page/restaurants-page.component';

const routes: Routes = [
  { path: '', component: HomepageComponent, data: { animation: 'isLeft'} },
  { path: 'restaurants', component: RestaurantsPageComponent, data: { animation: 'isRight'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }  

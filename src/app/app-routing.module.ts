import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NextpageComponent } from './pages/nextpage/nextpage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent, data: { animation: 'isLeft'} },
  { path: 'next', component: NextpageComponent, data: { animation: 'isRight'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }  

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { MainBannerSearchComponent } from './components/main-banner-search/main-banner-search.component';
import { PopularRestComponent } from './components/popular-rest/popular-rest.component';
import { OurIconsComponent } from './components/our-icons/our-icons.component';
import { ChefsComponent } from './components/chefs/chefs.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import {
  SwiperModule,
  SwiperConfigInterface,
  SWIPER_CONFIG
} from 'ngx-swiper-wrapper';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { TopBannerComponent } from './components/popular-rest/top-banner/top-banner.component';
import { BottomBannerComponent } from './components/popular-rest/bottom-banner/bottom-banner.component';
import { ChefsRestBtnComponent } from './components/chefs-rest-btn/chefs-rest-btn.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RestaurantsPageComponent } from '../app/pages/restaurants-page/restaurants-page.component';
import { RestNavComponent } from './components/rest-nav/rest-nav.component';
import { RestChefCardComponent } from './components/rest-chef-card/rest-chef-card.component';
import { RestDishCardComponent } from './components/rest-dish-card/rest-dish-card.component';
import { AllRestaurantsComponent } from './components/all-restaurants/all-restaurants.component';
import { NewRestComponent } from './components/new-rest/new-rest.component';
import { AllChefsComponent } from './components/all-chefs/all-chefs.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdminPageComponent } from './pages/admin-page/admin-page/admin-page.component';
import { AdminNavComponent } from './admin-components/admin-nav/admin-nav.component';
import { AdminRestaurantsComponent } from './admin-components/admin-restaurants/admin-restaurants.component';
import { AdminChefsComponent } from './admin-components/admin-chefs/admin-chefs.component';
import { AdminDishesComponent } from './admin-components/admin-dishes/admin-dishes.component';
import { EditModalComponent } from './admin-components/edit-modal/edit-modal.component';
import { ModalCardComponent } from './admin-components/edit-modal/rest-modal-card/modal-card.component';
import { CreateRestaurantComponent } from './admin-components/create-restaurant/create-restaurant.component';
import { CreateDishComponent } from './admin-components/create-dish/create-dish.component';
import { DishModalCardComponent } from './admin-components/edit-modal/dish-modal-card/dish-modal-card.component';
import { CreateChefComponent } from './admin-components/create-chef/create-chef.component';
import { ChefModalCardComponent } from './admin-components/edit-modal/chef-modal-card/chef-modal-card.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { MainInterceptor } from './services/main.interceptor';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  observer: true,
  direction: 'horizontal',
  threshold: 50,
  loop: true    
};

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    SearchBarComponent,
    MainBannerSearchComponent,
    PopularRestComponent,
    OurIconsComponent,
    ChefsComponent,
    AboutComponent,
    ContactComponent,
    TopBannerComponent,
    BottomBannerComponent,
    ChefsRestBtnComponent,
    RestaurantsPageComponent,
    RestNavComponent,
    RestChefCardComponent,
    RestDishCardComponent,
    AllRestaurantsComponent,
    NewRestComponent,
    AllChefsComponent,
    AdminPageComponent,
    AdminNavComponent,
    AdminRestaurantsComponent,
    AdminChefsComponent,
    AdminDishesComponent,
    EditModalComponent,
    ModalCardComponent,
    CreateRestaurantComponent,
    CreateDishComponent,
    DishModalCardComponent,
    CreateChefComponent,
    ChefModalCardComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    IvyCarouselModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MainInterceptor, multi: true },
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

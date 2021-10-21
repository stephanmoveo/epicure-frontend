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

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  observer: true,
  direction: 'horizontal',
  threshold: 50,
  spaceBetween: 5,
  slidesPerView: 1,
  centeredSlides: true
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
    NewRestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    IvyCarouselModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

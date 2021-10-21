import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NavbarComponent } from './components/home-components/navbar/navbar.component';
import { SearchBarComponent } from './components/home-components/search-bar/search-bar.component';
import { MainBannerSearchComponent } from './components/home-components/main-banner-search/main-banner-search.component';
import { PopularRestComponent } from './components/home-components/popular-rest/popular-rest.component';
import { OurIconsComponent } from './components/home-components/our-icons/our-icons.component';
import { ChefsComponent } from './components/home-components/chefs/chefs.component';
import { AboutComponent } from './components/home-components/about/about.component';
import { ContactComponent } from './components/home-components/contact/contact.component';
import {
  SwiperModule,
  SwiperConfigInterface,
  SWIPER_CONFIG
} from 'ngx-swiper-wrapper';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { TopBannerComponent } from './components/home-components/popular-rest/top-banner/top-banner.component';
import { BottomBannerComponent } from './components/home-components/popular-rest/bottom-banner/bottom-banner.component';
import { ChefsRestBtnComponent } from './components/home-components/chefs-rest-btn/chefs-rest-btn.component';
import { NextpageComponent } from './pages/nextpage/nextpage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RestaurantsPageComponent } from '../app/pages/restaurants-page/restaurants-page.component';
import { RestNavComponent } from './components/restaurants-components/rest-nav/rest-nav.component'



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
    NextpageComponent,
    RestaurantsPageComponent,
    RestNavComponent
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

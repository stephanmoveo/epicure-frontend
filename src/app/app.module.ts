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
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

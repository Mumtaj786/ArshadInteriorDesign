import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LuxeComponent } from './luxe/luxe.component';
import { BathroomComponent } from './bathroom/bathroom.component';
import { BlogComponent } from './blog/blog.component';
import { FeaturedProjectsComponent } from './featured-projects/featured-projects.component';
import { HomeInteriorDesignComponent } from './home-interior-design/home-interior-design.component';
import { HomeOfficeComponent } from './home-office/home-office.component';
import { LivingRoomComponent } from './living-room/living-room.component';
import { EstimateComponent } from './estimate/estimate.component';
import { DesignGalleryComponent } from './design-gallery/design-gallery.component';
import { BedroomComponent } from './bedroom/bedroom.component';
import { ModularKitchenComponent } from './modular-kitchen/modular-kitchen.component';
import { WardrobeComponent } from './wardrobe/wardrobe.component';
import { SharedFormComponent } from './shared-form/shared-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LuxeComponent,
    BathroomComponent,
    BlogComponent,
    FeaturedProjectsComponent,
    HomeInteriorDesignComponent,
    HomeOfficeComponent,
    LivingRoomComponent,
    NavBarComponent,
    EstimateComponent,
    DesignGalleryComponent,
    BedroomComponent,
    ModularKitchenComponent,
    WardrobeComponent,
    SharedFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

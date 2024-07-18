import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
import { ModularKitchenComponent } from './modular-kitchen/modular-kitchen.component';
import { WardrobeComponent } from './wardrobe/wardrobe.component';
import { BedroomComponent } from './bedroom/bedroom.component';

const routes: Routes = [
{ path:'', component: HomeComponent},
{path: 'luxe', component: LuxeComponent},
{path: 'bathroom', component: BathroomComponent},
{path: 'blog', component: BlogComponent},
{path: 'featured-products', component: FeaturedProjectsComponent},
{path: 'home-interior-design', component: HomeInteriorDesignComponent},
{path: 'home-office', component: HomeOfficeComponent},
{path: 'living-room', component: LivingRoomComponent},
{path:'nav-bar', component: NavBarComponent},
{path:'estimate', component: EstimateComponent},
{path:'design-gallery', component: DesignGalleryComponent},
{path:'modular-kitchen', component: ModularKitchenComponent},
{path:'wardrobe', component: WardrobeComponent},
{path:'bedroom', component:BedroomComponent },
{path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations:[
  ]
})
export class AppRoutingModule { }

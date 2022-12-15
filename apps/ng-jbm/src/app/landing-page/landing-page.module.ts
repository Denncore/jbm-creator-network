import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { TitleComponent } from './landing-page/title/title.component';



@NgModule({
  declarations: [
    LandingPageComponent,
    TitleComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule
  ]
})
export class LandingPageModule { }

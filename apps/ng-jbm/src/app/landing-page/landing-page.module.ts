import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { TitleComponent } from './title/title.component';
import { CreatorOverviewComponent } from './creator-overview/creator-overview.component';
import { UiModule } from '@jbm-creator-network/ui';



@NgModule({
  declarations: [
    LandingPageComponent,
    TitleComponent,
    CreatorOverviewComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    UiModule
  ]
})
export class LandingPageModule { }

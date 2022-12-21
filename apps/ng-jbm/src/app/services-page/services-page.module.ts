import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesPageComponent } from './services-page.component';
import { ServicesPageRoutingModule } from './services-page-routing.module';
import { UiModule } from '@jbm-creator-network/ui';
import { ServicesTitleComponent } from './services-title/services-title.component';
import { ServicesOfferComponent } from './services-offer/services-offer.component';

@NgModule({
  declarations: [ServicesPageComponent, ServicesTitleComponent, ServicesOfferComponent],
  imports: [CommonModule, ServicesPageRoutingModule, UiModule],
})
export class ServicesPageModule {}

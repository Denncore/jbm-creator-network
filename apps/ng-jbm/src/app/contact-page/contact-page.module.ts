import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactPageComponent } from './contact-page.component';
import { ContactPageRoutingModule } from './contact-page-routing.module';
import { UiModule } from '@jbm-creator-network/ui';
import { CreatorsModule } from '@jbm-creator-network/creators';

@NgModule({
  declarations: [ContactPageComponent],
  imports: [CommonModule, ContactPageRoutingModule, UiModule, CreatorsModule],
})
export class ContactPageModule {}

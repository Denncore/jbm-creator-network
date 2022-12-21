import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatorPageComponent } from './creator-page.component';
import { CreatorPageRoutingModule } from './creator-page-routing.module';
import { CreatorsTitleComponent } from './creators-title/creators-title.component';
import { UiModule } from '@jbm-creator-network/ui';
import { CreatorListComponent } from './creator-list/creator-list.component';
import { CreatorDetailComponent } from './creator-detail/creator-detail.component';
import { CreatorImpressumComponent } from './creator-impressum/creator-impressum.component';
import { CreatorDescriptionComponent } from './creator-detail/creator-description/creator-description.component';

@NgModule({
  declarations: [
    CreatorPageComponent,
    CreatorsTitleComponent,
    CreatorListComponent,
    CreatorDetailComponent,
    CreatorImpressumComponent,
    CreatorDescriptionComponent,
  ],
  imports: [CommonModule, CreatorPageRoutingModule, UiModule],
})
export class CreatorPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatorPageComponent } from './creator-page.component';
import { CreatorPageRoutingModule } from './creator-page-routing.module';
import { CreatorsTitleComponent } from './creators-title/creators-title.component';
import { UiModule } from '@jbm-creator-network/ui';
import { CreatorListComponent } from './creator-list/creator-list.component';

@NgModule({
  declarations: [CreatorPageComponent, CreatorsTitleComponent, CreatorListComponent],
  imports: [CommonModule, CreatorPageRoutingModule, UiModule],
})
export class CreatorPageModule {}

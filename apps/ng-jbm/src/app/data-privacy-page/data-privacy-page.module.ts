import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DataPrivacyPageComponent} from "./data-privacy-page.component";
import {DataPrivacyPageRoutingModule} from "./data-privacy-page-routing.module";
import {UiModule} from "@jbm-creator-network/ui";
import {DataPrivacyTitleComponent} from "./data-privacy-title/data-privacy-title.component";
import {DataPrivacyContentComponent} from "./data-privacy-content/data-privacy-content.component";

@NgModule({
  declarations: [
    DataPrivacyPageComponent,
    DataPrivacyTitleComponent,
    DataPrivacyContentComponent,
  ],
  imports: [
    CommonModule,
    DataPrivacyPageRoutingModule,
    UiModule
  ]
})
export class DataPrivacyPageModule {
}

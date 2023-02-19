import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ImpressumPageComponent} from "./impressum-page.component";
import {ImpressumContentComponent} from "./impressum-content/impressum-content.component";
import {UiModule} from "@jbm-creator-network/ui";
import {ImpressumPageRoutingModule} from "./impressum-page-routing.module";
import {ImpressumTitleComponent} from "./impressum-title/impressum-title.component";


@NgModule({
  declarations: [
    ImpressumPageComponent,
    ImpressumTitleComponent,
    ImpressumContentComponent
  ],
  imports: [
    CommonModule, ImpressumPageRoutingModule, UiModule
  ]
})
export class ImpressumPageModule {
}

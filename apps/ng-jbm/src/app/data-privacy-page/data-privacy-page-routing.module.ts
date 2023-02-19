import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DataPrivacyPageComponent} from "./data-privacy-page.component";

const routes: Routes = [
  {
    path: '',
    component: DataPrivacyPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataPrivacyPageRoutingModule {
}

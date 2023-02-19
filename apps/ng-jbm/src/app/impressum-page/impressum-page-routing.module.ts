import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ImpressumPageComponent} from "./impressum-page.component";

const routes: Routes = [
  {
    path: '',
    component: ImpressumPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImpressumPageRoutingModule {
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatorPageComponent } from './creator-page.component';
import {CreatorDetailComponent} from "./creator-detail/creator-detail.component";
import {CreatorImpressumComponent} from "./creator-impressum/creator-impressum.component";

const routes: Routes = [
  {
    path: '',
    component: CreatorPageComponent
  },
  {
    path: ':id',
    component: CreatorDetailComponent
  },
  {
    path: ':id/impressum',
    component: CreatorImpressumComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatorPageRoutingModule { }

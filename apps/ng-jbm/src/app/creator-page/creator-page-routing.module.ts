import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatorPageComponent } from './creator-page.component';
import {CreatorDetailComponent} from "./creator-detail/creator-detail.component";

const routes: Routes = [
  {
    path: '',
    component: CreatorPageComponent
  },
  {
    path: ':id',
    component: CreatorDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatorPageRoutingModule { }

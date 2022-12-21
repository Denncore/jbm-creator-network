import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatorPageComponent } from './creator-page.component';
import { CreatorDetailComponent } from './creator-detail/creator-detail.component';
import { CreatorImpressumComponent } from './creator-detail/creator-impressum/creator-impressum.component';
import { CreatorDescriptionComponent } from './creator-detail/creator-description/creator-description.component';

const routes: Routes = [
  {
    path: '',
    component: CreatorPageComponent,
  },
  {
    path: ':id',
    component: CreatorDetailComponent,
    children: [
      {
        path: '',
        component: CreatorDescriptionComponent,
      },
      {
        path: 'impressum',
        component: CreatorImpressumComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatorPageRoutingModule {}

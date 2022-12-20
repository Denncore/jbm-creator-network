import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'start', 
    loadChildren: () => import('./landing-page/landing-page.module').then(m => m.LandingPageModule)
  },  { 
    path: 'creator', 
    loadChildren: () => import('./creator-page/creator-page.module').then(m => m.CreatorPageModule)
  },  
  {
    path: '',
    redirectTo: '/start',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

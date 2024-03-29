import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'start',
    loadChildren: () =>
      import('./landing-page/landing-page.module').then(
        m => m.LandingPageModule
      ),
  },
  {
    path: 'creator',
    loadChildren: () =>
      import('./creator-page/creator-page.module').then(
        m => m.CreatorPageModule
      ),
  },
  {
    path: 'services',
    loadChildren: () =>
      import('./services-page/services-page.module').then(
        m => m.ServicesPageModule
      ),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./contact-page/contact-page.module').then(
        m => m.ContactPageModule
      ),
  },
  {
    path: 'impressum',
    loadChildren: () =>
      import('./impressum-page/impressum-page.module').then(
        m => m.ImpressumPageModule
      ),
  },
  {
    path: 'data-privacy',
    loadChildren: () =>
      import('./data-privacy-page/data-privacy-page.module').then(
        m => m.DataPrivacyPageModule
      ),
  },
  {
    path: '',
    redirectTo: 'start',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      enableTracing: false,
      anchorScrolling: 'enabled'
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

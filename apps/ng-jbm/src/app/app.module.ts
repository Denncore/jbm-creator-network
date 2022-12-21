import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { CreatorsModule } from '@jbm-creator-network/creators';
import { ENVIRONMENT } from '@jbm-creator-network/environment';
import { UiModule } from '@jbm-creator-network/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(
      {},
      {
        metaReducers: [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    UiModule,
    AppRoutingModule,
    CreatorsModule,
  ],
  providers: [
    // Let angular know which value to use when injecting the token at runtime.
    { provide: ENVIRONMENT, useValue: environment },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

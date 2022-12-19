import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { UiModule } from '@jbm-creator-network/ui';
import { AppRoutingModule } from './app-routing.module';
import { ENVIRONMENT } from '@jbm-creator-network/environment';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { CreatorsEffects } from 'libs/creators/src/lib/+state/creators/creators.effects';
import { CreatorsModule } from '@jbm-creator-network/creators';

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

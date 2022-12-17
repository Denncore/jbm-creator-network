import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromCreators from './+state/creators/creators.reducer';
import { CreatorsEffects } from './+state/creators/creators.effects';
import { CreatorContactComponent } from './creator-contact/creator-contact.component';
import { UiModule } from '@jbm-creator-network/ui';
import { ReactiveFormsModule } from '@angular/forms';
import { NgHcaptchaModule } from 'ng-hcaptcha';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    UiModule,
    StoreModule.forFeature(
      fromCreators.CREATORS_FEATURE_KEY,
      fromCreators.creatorsReducer
    ),
    EffectsModule.forFeature([CreatorsEffects]),
    NgHcaptchaModule.forRoot(),
  ],
  declarations: [CreatorContactComponent],
  exports: [CreatorContactComponent],
})
export class CreatorsModule {}

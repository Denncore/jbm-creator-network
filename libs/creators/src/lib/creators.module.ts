import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromCreators from './+state/creators/creators.reducer';
import { CreatorsEffects } from './+state/creators/creators.effects';
import { CreatorContactComponent } from './creator-contact/creator-contact.component';
import { UiModule } from '@jbm-creator-network/ui';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UiModule,
    StoreModule.forFeature(
      fromCreators.CREATORS_FEATURE_KEY,
      fromCreators.creatorsReducer
    ),
    EffectsModule.forFeature([CreatorsEffects]),
  ],
  declarations: [CreatorContactComponent],
  exports: [CreatorContactComponent],
})
export class CreatorsModule {}

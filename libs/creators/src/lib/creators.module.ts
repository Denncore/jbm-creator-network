import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromCreators from './+state/creators/creators.reducer';
import { CreatorsEffects } from './+state/creators/creators.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromCreators.CREATORS_FEATURE_KEY,
      fromCreators.creatorsReducer
    ),
    EffectsModule.forFeature([CreatorsEffects]),
  ],
})
export class CreatorsModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { SocialCountPipe } from './social-count.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [HeaderComponent, CardComponent, SocialCountPipe],
  exports: [HeaderComponent, CardComponent]
})
export class UiModule {}

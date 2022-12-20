import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SocialCountPipe } from './social-count.pipe';
import { VerticalCardComponent } from './vertical-card/vertical-card.component';

const components = [
  HeaderComponent,
  CardComponent,
  SocialCountPipe,
  ButtonComponent,
  FooterComponent,
  VerticalCardComponent,
];

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  declarations: [...components],
  exports: [...components],
})
export class UiModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { SocialCountPipe } from './social-count.pipe';
import { ButtonComponent } from './button/button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';

const components = [
  HeaderComponent,
  CardComponent,
  SocialCountPipe,
  ButtonComponent,
  FooterComponent,
];

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [...components],
  exports: [...components],
})
export class UiModule {}

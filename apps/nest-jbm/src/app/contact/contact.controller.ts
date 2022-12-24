import { ContactEmail } from '@jbm-creator-network/model';
import { Body, Controller, Logger, Post } from '@nestjs/common';
import { map, switchMap, tap, throwError } from 'rxjs';
import { CaptchaService } from './captcha/captcha.service';
import { ContactService } from './contact.service';

@Controller('contact')
export class ContactController {
  constructor(
    private contactService: ContactService,
    private captchaService: CaptchaService
  ) {}

  @Post('send')
  plainTextEmail(@Body() contactEmail: ContactEmail) {
    return this.captchaService.validateCaptcha(contactEmail.captcha).pipe(
      switchMap(success => {
        if (!success) {
          return throwError(() => new Error('Wrong Captcha')).pipe(
            tap(err => Logger.log(err, 'ContactController'))
          );
        } else {
          return this.contactService.sendMessage(contactEmail).pipe(
            tap(resp => Logger.log(resp, 'ContactController successful sent')),
            map(resp => ({ success: resp?.accepted?.length > 0 }))
          );
        }
      })
    );
  }
}

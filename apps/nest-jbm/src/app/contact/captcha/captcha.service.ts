import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { environment } from 'apps/nest-jbm/src/environments/environment';
import { map, Observable, tap } from 'rxjs';

// Docs: https://docs.hcaptcha.com

@Injectable()
export class CaptchaService {
  constructor(private readonly httpService: HttpService) {}

  public validateCaptcha(captcha: string): Observable<boolean> {
    const body = `response=${captcha}&secret=${environment.hCaptcha.secret}&sitekey=${environment.hCaptcha.sitekey}`;

    return this.httpService.post('https://hcaptcha.com/siteverify', body).pipe(
      tap(resp => Logger.log(resp?.data, 'CaptchaService validate captcha')),
      map(resp => resp.data.success)
    );
  }
}

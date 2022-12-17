import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CaptchaServiceService {
  constructor(private httpClient: HttpClient) {}

  verifyCaptchaToken(token: string): Observable<any> {
    return this.httpClient.post('https://api.hcaptcha.com/siteverify', token);
  }
}

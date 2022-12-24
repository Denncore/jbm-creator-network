import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Environment, ENVIRONMENT } from '@jbm-creator-network/environment';
import { ContactEmail, ContactEmailResponse } from '@jbm-creator-network/model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactEmailService {
  constructor(
    @Inject(ENVIRONMENT) public env: Environment,
    private httpClient: HttpClient
  ) {}

  sendContactEmail(
    contactEmail: ContactEmail
  ): Observable<ContactEmailResponse> {
    return this.httpClient.post<ContactEmailResponse>(
      `${this.env.baseUrlApi}/contact/send`,
      contactEmail
    );
  }
}

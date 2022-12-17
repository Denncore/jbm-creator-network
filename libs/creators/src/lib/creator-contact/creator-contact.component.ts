import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Environment, ENVIRONMENT } from '@jbm-creator-network/environment';
import { CaptchaServiceService } from './captcha-service.service';

@Component({
  selector: 'jbm-creator-network-creator-contact',
  templateUrl: './creator-contact.component.html',
  styleUrls: ['./creator-contact.component.css'],
})
export class CreatorContactComponent {
  contactForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    eMail: ['', [Validators.required, Validators.email]],
    creatorName: ['', [Validators.required, Validators.minLength(3)]],
    message: ['', [Validators.required]],
    creatorDirectContact: [false],
    tosAccepted: [false, [Validators.requiredTrue]],
    captcha: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    @Inject(ENVIRONMENT) public env: Environment
  ) {
    console.log(env);
  }

  isControlInValid(formControlName: string): boolean {
    return (
      this.contactForm.controls[formControlName].touched &&
      this.contactForm.controls[formControlName].invalid
    );
  }
  onVerify(token: string) {
    // The verification process was successful.
    // You can verify the token on your server now.
    console.log(token);
  }

  onExpired(response: any) {
    // The verification expired.
  }

  onError(error: any) {
    // An error occured during the verification process.
  }
}

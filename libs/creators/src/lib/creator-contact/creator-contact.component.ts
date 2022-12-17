import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  });

  constructor(private fb: FormBuilder) {}

  isControlInValid(formControlName: string): boolean {
    return (
      this.contactForm.controls[formControlName].touched &&
      this.contactForm.controls[formControlName].invalid
    );
  }
}

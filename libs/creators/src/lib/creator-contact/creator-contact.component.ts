import {Component, Inject, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ContactEmailService} from '@jbm-creator-network/api';
import {Environment, ENVIRONMENT} from '@jbm-creator-network/environment';
import {take} from 'rxjs';

@Component({
  selector: 'jbm-creator-network-creator-contact',
  templateUrl: './creator-contact.component.html',
  styleUrls: ['./creator-contact.component.css'],
})
export class CreatorContactComponent implements OnInit {
  @Input() preSelectedCreator?: string | null;

  contactForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    eMail: ['', [Validators.required, Validators.email]],
    creatorName: ['', [Validators.minLength(3)]],
    message: ['', [Validators.required]],
    creatorDirectContact: [false],
    tosAccepted: [false, [Validators.requiredTrue]],
    captcha: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    @Inject(ENVIRONMENT) public env: Environment,
    private contactEmailService: ContactEmailService
  ) {}

  ngOnInit(): void {
    console.log(this.preSelectedCreator);
    this.contactForm.controls['creatorName'].setValue(this.preSelectedCreator);
  }

  isControlInValid(formControlName: string): boolean {
    return (
      this.contactForm.controls[formControlName].touched &&
      this.contactForm.controls[formControlName].invalid
    );
  }

  sendMail(): void {
    this.contactEmailService
      .sendContactEmail(this.contactForm.value)
      .pipe(take(1))
      .subscribe(() => {
        this.contactForm.controls['captcha'].setValue('');
      });
  }
}

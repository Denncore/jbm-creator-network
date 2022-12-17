import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { UiModule } from '@jbm-creator-network/ui';

import { CreatorContactComponent } from './creator-contact.component';

describe('CreatorContactComponent', () => {
  let component: CreatorContactComponent;
  let fixture: ComponentFixture<CreatorContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, ReactiveFormsModule, UiModule],
      declarations: [CreatorContactComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreatorContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('form validation', () => {
    it('should correctly validate name', () => {
      expect(component.contactForm.controls['name']).toBeDefined();
      expect(component.contactForm.controls['name'].invalid).toBeTruthy();

      component.contactForm.controls['name'].setValue('tt');
      expect(component.contactForm.controls['name'].invalid).toBeTruthy();

      component.contactForm.controls['name'].setValue('tes');
      expect(component.contactForm.controls['name'].invalid).toBeFalsy();
    });

    it('should correctly validate email', () => {
      expect(component.contactForm.controls['eMail']).toBeDefined();
      expect(component.contactForm.controls['eMail'].invalid).toBeTruthy();

      component.contactForm.controls['eMail'].setValue('test');
      expect(component.contactForm.controls['eMail'].invalid).toBeTruthy();

      component.contactForm.controls['eMail'].setValue('test@awid.de');
      expect(component.contactForm.controls['eMail'].invalid).toBeFalsy();
    });

    it('should correctly validate creatorName', () => {
      expect(component.contactForm.controls['creatorName']).toBeDefined();
      expect(
        component.contactForm.controls['creatorName'].invalid
      ).toBeTruthy();

      component.contactForm.controls['creatorName'].setValue('test');

      expect(component.contactForm.controls['creatorName'].invalid).toBeFalsy();
    });

    it('should correctly validate creatorName', () => {
      expect(component.contactForm.controls['creatorName']).toBeDefined();
      expect(
        component.contactForm.controls['creatorName'].invalid
      ).toBeTruthy();

      component.contactForm.controls['creatorName'].setValue('te');
      expect(
        component.contactForm.controls['creatorName'].invalid
      ).toBeTruthy();
      component.contactForm.controls['creatorName'].setValue('tes');
      expect(component.contactForm.controls['creatorName'].invalid).toBeFalsy();
    });

    it('should correctly validate creatorName', () => {
      expect(component.contactForm.controls['creatorName']).toBeDefined();
      expect(
        component.contactForm.controls['creatorName'].invalid
      ).toBeTruthy();

      component.contactForm.controls['creatorName'].setValue('te');
      expect(
        component.contactForm.controls['creatorName'].invalid
      ).toBeTruthy();
      component.contactForm.controls['creatorName'].setValue('tes');
      expect(component.contactForm.controls['creatorName'].invalid).toBeFalsy();
    });

    it('should correctly validate message', () => {
      expect(component.contactForm.controls['message']).toBeDefined();
      expect(component.contactForm.controls['message'].invalid).toBeTruthy();

      component.contactForm.controls['message'].setValue('tes');
      expect(component.contactForm.controls['message'].invalid).toBeFalsy();
    });

    it('should correctly validate message', () => {
      expect(component.contactForm.controls['tosAccepted']).toBeDefined();
      expect(
        component.contactForm.controls['tosAccepted'].invalid
      ).toBeTruthy();

      component.contactForm.controls['tosAccepted'].setValue(false);
      expect(
        component.contactForm.controls['tosAccepted'].invalid
      ).toBeTruthy();
      component.contactForm.controls['tosAccepted'].setValue(true);
      expect(component.contactForm.controls['tosAccepted'].invalid).toBeFalsy();
    });

    it('form should only be valid if all required fields are set', () => {
      expect(component.contactForm.invalid).toBeTruthy();
      component.contactForm.setValue({
        name: '1245',
        eMail: '231@widj.de',
        creatorName: 'awdawd',
        message: 'awdawdafawfawfawf',
        creatorDirectContact: false,
        tosAccepted: true,
      });
      expect(component.contactForm.invalid).toBeFalsy();
    });
  });
});

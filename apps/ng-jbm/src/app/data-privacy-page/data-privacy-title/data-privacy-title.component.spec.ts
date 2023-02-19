import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DataPrivacyTitleComponent} from './data-privacy-title.component';

describe('DataPrivacyTitleComponent', () => {
  let component: DataPrivacyTitleComponent;
  let fixture: ComponentFixture<DataPrivacyTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataPrivacyTitleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DataPrivacyTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

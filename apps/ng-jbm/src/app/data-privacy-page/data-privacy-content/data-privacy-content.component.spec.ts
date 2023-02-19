import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DataPrivacyContentComponent} from './data-privacy-content.component';

describe('DataPrivacyContentComponent', () => {
  let component: DataPrivacyContentComponent;
  let fixture: ComponentFixture<DataPrivacyContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataPrivacyContentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DataPrivacyContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

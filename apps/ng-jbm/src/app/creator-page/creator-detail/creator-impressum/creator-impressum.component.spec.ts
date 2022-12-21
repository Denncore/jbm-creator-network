import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorImpressumComponent } from './creator-impressum.component';

describe('CreatorImpressumComponent', () => {
  let component: CreatorImpressumComponent;
  let fixture: ComponentFixture<CreatorImpressumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatorImpressumComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreatorImpressumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

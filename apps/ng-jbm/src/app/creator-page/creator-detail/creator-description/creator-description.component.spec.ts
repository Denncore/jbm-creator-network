import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorDescriptionComponent } from './creator-description.component';

describe('CreatorDescriptionComponent', () => {
  let component: CreatorDescriptionComponent;
  let fixture: ComponentFixture<CreatorDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatorDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatorDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

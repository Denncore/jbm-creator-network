import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorsTitleComponent } from './creators-title.component';

describe('CreatorsTitleComponent', () => {
  let component: CreatorsTitleComponent;
  let fixture: ComponentFixture<CreatorsTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatorsTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatorsTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

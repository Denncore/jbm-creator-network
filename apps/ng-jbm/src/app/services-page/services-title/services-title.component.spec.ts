import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesTitleComponent } from './services-title.component';

describe('ServicesTitleComponent', () => {
  let component: ServicesTitleComponent;
  let fixture: ComponentFixture<ServicesTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

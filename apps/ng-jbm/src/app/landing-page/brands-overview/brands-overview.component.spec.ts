import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsOverviewComponent } from './brands-overview.component';

describe('BrandsOverviewComponent', () => {
  let component: BrandsOverviewComponent;
  let fixture: ComponentFixture<BrandsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandsOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

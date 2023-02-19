import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ImpressumContentComponent} from './impressum-content.component';

describe('ImpressumContentComponent', () => {
  let component: ImpressumContentComponent;
  let fixture: ComponentFixture<ImpressumContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImpressumContentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ImpressumContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

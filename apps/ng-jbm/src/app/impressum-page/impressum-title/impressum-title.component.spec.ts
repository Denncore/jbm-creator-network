import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ImpressumTitleComponent} from './impressum-title.component';

describe('ImpressumTitleComponent', () => {
  let component: ImpressumTitleComponent;
  let fixture: ComponentFixture<ImpressumTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImpressumTitleComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ImpressumTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

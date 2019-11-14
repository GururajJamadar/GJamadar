import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalPaymentsComponent } from './professional-payments.component';

describe('ProfessionalPaymentsComponent', () => {
  let component: ProfessionalPaymentsComponent;
  let fixture: ComponentFixture<ProfessionalPaymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionalPaymentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

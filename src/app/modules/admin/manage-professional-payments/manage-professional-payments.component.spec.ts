import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageProfessionalPaymentsComponent } from './manage-professional-payments.component';

describe('ManageProfessionalPaymentsComponent', () => {
  let component: ManageProfessionalPaymentsComponent;
  let fixture: ComponentFixture<ManageProfessionalPaymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageProfessionalPaymentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageProfessionalPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

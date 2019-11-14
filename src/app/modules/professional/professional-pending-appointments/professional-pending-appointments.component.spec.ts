import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalPendingAppointmentsComponent } from './professional-pending-appointments.component';

describe('ProfessionalPendingAppointmentsComponent', () => {
  let component: ProfessionalPendingAppointmentsComponent;
  let fixture: ComponentFixture<ProfessionalPendingAppointmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionalPendingAppointmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalPendingAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

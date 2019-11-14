import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalCompletedAppointmentsComponent } from './professional-completed-appointments.component';

describe('ProfessionalCompletedAppointmentsComponent', () => {
  let component: ProfessionalCompletedAppointmentsComponent;
  let fixture: ComponentFixture<ProfessionalCompletedAppointmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionalCompletedAppointmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalCompletedAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

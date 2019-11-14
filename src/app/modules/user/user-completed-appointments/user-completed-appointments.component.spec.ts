import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCompletedAppointmentsComponent } from './user-completed-appointments.component';

describe('UserCompletedAppointmentsComponent', () => {
  let component: UserCompletedAppointmentsComponent;
  let fixture: ComponentFixture<UserCompletedAppointmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCompletedAppointmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCompletedAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

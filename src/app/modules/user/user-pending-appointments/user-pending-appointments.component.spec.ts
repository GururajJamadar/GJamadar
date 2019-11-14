import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPendingAppointmentsComponent } from './user-pending-appointments.component';

describe('UserPendingAppointmentsComponent', () => {
  let component: UserPendingAppointmentsComponent;
  let fixture: ComponentFixture<UserPendingAppointmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPendingAppointmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPendingAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

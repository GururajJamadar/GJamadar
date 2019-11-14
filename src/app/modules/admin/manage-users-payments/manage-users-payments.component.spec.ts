import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageUsersPaymentsComponent } from './manage-users-payments.component';

describe('ManageUsersPaymentsComponent', () => {
  let component: ManageUsersPaymentsComponent;
  let fixture: ComponentFixture<ManageUsersPaymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageUsersPaymentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageUsersPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

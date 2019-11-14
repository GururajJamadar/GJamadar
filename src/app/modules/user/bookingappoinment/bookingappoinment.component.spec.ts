import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingappoinmentComponent } from './bookingappoinment.component';

describe('BookingappoinmentComponent', () => {
  let component: BookingappoinmentComponent;
  let fixture: ComponentFixture<BookingappoinmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingappoinmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingappoinmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

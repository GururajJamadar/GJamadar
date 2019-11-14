import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisapprovedprofessionalComponent } from './disapprovedprofessional.component';

describe('DisapprovedprofessionalComponent', () => {
  let component: DisapprovedprofessionalComponent;
  let fixture: ComponentFixture<DisapprovedprofessionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisapprovedprofessionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisapprovedprofessionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicssignupComponent } from './academicssignup.component';

describe('AcademicssignupComponent', () => {
  let component: AcademicssignupComponent;
  let fixture: ComponentFixture<AcademicssignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademicssignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicssignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

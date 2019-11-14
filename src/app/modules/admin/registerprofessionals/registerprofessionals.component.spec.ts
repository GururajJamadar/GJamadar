import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterprofessionalsComponent } from './registerprofessionals.component';

describe('RegisterprofessionalsComponent', () => {
  let component: RegisterprofessionalsComponent;
  let fixture: ComponentFixture<RegisterprofessionalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterprofessionalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterprofessionalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

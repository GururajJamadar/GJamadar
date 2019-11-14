import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicsHomeComponent } from './academics-home.component';

describe('AcademicsHomeComponent', () => {
  let component: AcademicsHomeComponent;
  let fixture: ComponentFixture<AcademicsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademicsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

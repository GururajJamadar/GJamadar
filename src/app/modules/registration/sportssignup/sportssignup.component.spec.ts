import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportssignupComponent } from './sportssignup.component';

describe('SportssignupComponent', () => {
  let component: SportssignupComponent;
  let fixture: ComponentFixture<SportssignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportssignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportssignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

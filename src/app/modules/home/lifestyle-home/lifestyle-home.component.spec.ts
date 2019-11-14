import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifestyleHomeComponent } from './lifestyle-home.component';

describe('LifestyleHomeComponent', () => {
  let component: LifestyleHomeComponent;
  let fixture: ComponentFixture<LifestyleHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifestyleHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifestyleHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

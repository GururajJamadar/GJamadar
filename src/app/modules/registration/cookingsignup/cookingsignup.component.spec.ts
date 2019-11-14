import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CookingsignupComponent } from './cookingsignup.component';

describe('CookingsignupComponent', () => {
  let component: CookingsignupComponent;
  let fixture: ComponentFixture<CookingsignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookingsignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookingsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

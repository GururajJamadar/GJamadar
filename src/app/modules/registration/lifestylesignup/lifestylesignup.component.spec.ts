import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifestylesignupComponent } from './lifestylesignup.component';

describe('LifestylesignupComponent', () => {
  let component: LifestylesignupComponent;
  let fixture: ComponentFixture<LifestylesignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifestylesignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifestylesignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

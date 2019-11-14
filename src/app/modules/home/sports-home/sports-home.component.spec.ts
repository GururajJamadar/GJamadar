import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsHomeComponent } from './sports-home.component';

describe('SportsHomeComponent', () => {
  let component: SportsHomeComponent;
  let fixture: ComponentFixture<SportsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

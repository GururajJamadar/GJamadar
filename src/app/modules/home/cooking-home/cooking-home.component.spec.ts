import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CookingHomeComponent } from './cooking-home.component';

describe('CookingHomeComponent', () => {
  let component: CookingHomeComponent;
  let fixture: ComponentFixture<CookingHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookingHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

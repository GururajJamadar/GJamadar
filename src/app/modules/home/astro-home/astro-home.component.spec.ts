import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AstroHomeComponent } from './astro-home.component';

describe('AstroHomeComponent', () => {
  let component: AstroHomeComponent;
  let fixture: ComponentFixture<AstroHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AstroHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AstroHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

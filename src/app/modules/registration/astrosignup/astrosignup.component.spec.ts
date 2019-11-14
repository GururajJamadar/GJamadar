import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AstrosignupComponent } from './astrosignup.component';

describe('AstrosignupComponent', () => {
  let component: AstrosignupComponent;
  let fixture: ComponentFixture<AstrosignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AstrosignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AstrosignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

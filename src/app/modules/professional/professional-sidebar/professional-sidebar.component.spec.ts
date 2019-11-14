import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalSidebarComponent } from './professional-sidebar.component';

describe('ProfessionalSidebarComponent', () => {
  let component: ProfessionalSidebarComponent;
  let fixture: ComponentFixture<ProfessionalSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionalSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

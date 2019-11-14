import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageProfessionalsComponent } from './manage-professionals.component';

describe('ManageProfessionalsComponent', () => {
  let component: ManageProfessionalsComponent;
  let fixture: ComponentFixture<ManageProfessionalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageProfessionalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageProfessionalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

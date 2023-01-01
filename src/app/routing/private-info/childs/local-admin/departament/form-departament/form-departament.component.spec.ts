import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDepartamentComponent } from './form-departament.component';

describe('FormDepartamentComponent', () => {
  let component: FormDepartamentComponent;
  let fixture: ComponentFixture<FormDepartamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDepartamentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDepartamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPositionPersonComponent } from './form-position-person.component';

describe('FormPositionPersonComponent', () => {
  let component: FormPositionPersonComponent;
  let fixture: ComponentFixture<FormPositionPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPositionPersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPositionPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDepartamentComponent } from './list-departament.component';

describe('ListDepartamentComponent', () => {
  let component: ListDepartamentComponent;
  let fixture: ComponentFixture<ListDepartamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDepartamentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDepartamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

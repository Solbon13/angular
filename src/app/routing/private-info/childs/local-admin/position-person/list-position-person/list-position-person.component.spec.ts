import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPositionPersonComponent } from './list-position-person.component';

describe('ListPositionPersonComponent', () => {
  let component: ListPositionPersonComponent;
  let fixture: ComponentFixture<ListPositionPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPositionPersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPositionPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

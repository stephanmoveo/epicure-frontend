import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestDishCardComponent } from './rest-dish-card.component';

describe('RestDishCardComponent', () => {
  let component: RestDishCardComponent;
  let fixture: ComponentFixture<RestDishCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestDishCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestDishCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishModalCardComponent } from './dish-modal-card.component';

describe('DishModalCardComponent', () => {
  let component: DishModalCardComponent;
  let fixture: ComponentFixture<DishModalCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DishModalCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DishModalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

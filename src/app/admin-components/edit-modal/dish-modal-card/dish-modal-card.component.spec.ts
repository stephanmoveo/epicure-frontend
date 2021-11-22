import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { DishModalCardComponent } from './dish-modal-card.component';

describe('DishModalCardComponent', () => {
  let component: DishModalCardComponent;
  let fixture: ComponentFixture<DishModalCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DishModalCardComponent ],
      imports: [RouterTestingModule.withRoutes([]),
      HttpClientTestingModule],

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DishModalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});

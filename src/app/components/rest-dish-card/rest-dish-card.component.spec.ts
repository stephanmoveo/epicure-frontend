import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { RestDishCardComponent } from './rest-dish-card.component';

describe('RestDishCardComponent', () => {
  let component: RestDishCardComponent;
  let fixture: ComponentFixture<RestDishCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RestDishCardComponent],
      imports: [RouterTestingModule.withRoutes([]), HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestDishCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});

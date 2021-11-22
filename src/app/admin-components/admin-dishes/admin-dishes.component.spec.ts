import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AdminDishesComponent } from './admin-dishes.component';

describe('AdminDishesComponent', () => {
  let component: AdminDishesComponent;
  let fixture: ComponentFixture<AdminDishesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDishesComponent ],
      imports: [RouterTestingModule.withRoutes([]),
      HttpClientTestingModule],

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

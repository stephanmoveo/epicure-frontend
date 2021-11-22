import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AdminRestaurantsComponent } from './admin-restaurants.component';

describe('AdminRestaurantsComponent', () => {
  let component: AdminRestaurantsComponent;
  let fixture: ComponentFixture<AdminRestaurantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRestaurantsComponent ],
      imports: [RouterTestingModule.withRoutes([]),
      HttpClientTestingModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRestaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

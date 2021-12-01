import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { RestChefCardComponent } from './rest-chef-card.component';

describe('RestChefCardComponent', () => {
  let component: RestChefCardComponent;
  let fixture: ComponentFixture<RestChefCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RestChefCardComponent],
      imports: [RouterTestingModule.withRoutes([]), HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestChefCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});

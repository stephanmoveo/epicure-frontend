import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PopularRestComponent } from './popular-rest.component';

describe('PopularRestComponent', () => {
  let component: PopularRestComponent;
  let fixture: ComponentFixture<PopularRestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopularRestComponent],
      imports: [RouterTestingModule.withRoutes([]), HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularRestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

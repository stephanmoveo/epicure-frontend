import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { NewRestComponent } from './new-rest.component';

describe('NewRestComponent', () => {
  let component: NewRestComponent;
  let fixture: ComponentFixture<NewRestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewRestComponent],
      imports: [RouterTestingModule.withRoutes([]), HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

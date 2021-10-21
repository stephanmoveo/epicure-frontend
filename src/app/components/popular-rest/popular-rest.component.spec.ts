import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularRestComponent } from './popular-rest.component';

describe('PopularRestComponent', () => {
  let component: PopularRestComponent;
  let fixture: ComponentFixture<PopularRestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularRestComponent ]
    })
    .compileComponents();
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

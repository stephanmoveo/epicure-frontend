import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefsRestBtnComponent } from './chefs-rest-btn.component';

describe('ChefsRestBtnComponent', () => {
  let component: ChefsRestBtnComponent;
  let fixture: ComponentFixture<ChefsRestBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefsRestBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefsRestBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

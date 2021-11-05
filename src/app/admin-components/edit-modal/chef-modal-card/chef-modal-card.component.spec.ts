import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefModalCardComponent } from './chef-modal-card.component';

describe('ChefModalCardComponent', () => {
  let component: ChefModalCardComponent;
  let fixture: ComponentFixture<ChefModalCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefModalCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefModalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestChefCardComponent } from './rest-chef-card.component';

describe('RestChefCardComponent', () => {
  let component: RestChefCardComponent;
  let fixture: ComponentFixture<RestChefCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestChefCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestChefCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

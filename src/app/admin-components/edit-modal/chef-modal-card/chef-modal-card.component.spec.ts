import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ChefModalCardComponent } from './chef-modal-card.component';

describe('ChefModalCardComponent', () => {
  let component: ChefModalCardComponent;
  let fixture: ComponentFixture<ChefModalCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefModalCardComponent ],
      imports: [RouterTestingModule.withRoutes([]),
      HttpClientTestingModule],

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefModalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MainBannerSearchComponent } from './main-banner-search.component';

describe('MainBannerSearchComponent', () => {
  let component: MainBannerSearchComponent;
  let fixture: ComponentFixture<MainBannerSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainBannerSearchComponent],
      imports: [RouterTestingModule.withRoutes([]), HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainBannerSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

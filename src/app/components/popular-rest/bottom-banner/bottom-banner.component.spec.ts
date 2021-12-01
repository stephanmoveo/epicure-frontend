import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { BottomBannerComponent } from './bottom-banner.component';

describe('BottomBannerComponent', () => {
  let component: BottomBannerComponent;
  let fixture: ComponentFixture<BottomBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BottomBannerComponent],
      imports: [RouterTestingModule.withRoutes([]), HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

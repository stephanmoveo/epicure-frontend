import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurIconsComponent } from './our-icons.component';

describe('OurIconsComponent', () => {
  let component: OurIconsComponent;
  let fixture: ComponentFixture<OurIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurIconsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

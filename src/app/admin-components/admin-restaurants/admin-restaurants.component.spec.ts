import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AdminService } from 'src/app/services/admin.service';
import { AdminRestaurantsComponent } from './admin-restaurants.component';

describe('AdminRestaurantsComponent', () => {
  let component: AdminRestaurantsComponent;
  let fixture: ComponentFixture<AdminRestaurantsComponent>;
  let service: AdminService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminRestaurantsComponent],
      imports: [RouterTestingModule.withRoutes([]), HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRestaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(AdminService);
  });

  it('gets items in modal', () => {
    const item = {
      _id: '618108790bb6f9c31760010e',
      name: 'Kitchen Market',
      image: 'assets/img/Rests/All/kitchen-market.jpg',
      chef: {
        _id: '618105c865292eca59830e68',
        firstName: 'Kossi',
        lastName: 'Phitrit',
      },
    };
    component.getItemsInModal(item, 'rests');
    expect(service.isCategoryModal).toEqual('rests');
    expect(service.modalData).toBe(item);
    expect(service.isModalOpen());
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

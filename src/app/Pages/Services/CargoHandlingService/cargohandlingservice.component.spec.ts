import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargohandlingserviceComponent } from './cargohandlingservice.component';

describe('CargohandlingserviceComponent', () => {
  let component: CargohandlingserviceComponent;
  let fixture: ComponentFixture<CargohandlingserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargohandlingserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargohandlingserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargosaleserviceComponent } from './cargosaleservice.component';

describe('CargosaleserviceComponent', () => {
  let component: CargosaleserviceComponent;
  let fixture: ComponentFixture<CargosaleserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargosaleserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargosaleserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

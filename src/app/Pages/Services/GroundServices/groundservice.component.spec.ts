import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroundserviceComponent } from './groundservice.component';

describe('GroundserviceComponent', () => {
  let component: GroundserviceComponent;
  let fixture: ComponentFixture<GroundserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroundserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroundserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

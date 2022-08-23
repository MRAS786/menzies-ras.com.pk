import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TickettravelserviceComponent } from './tickettravelservice.component';

describe('TickettravelserviceComponent', () => {
  let component: TickettravelserviceComponent;
  let fixture: ComponentFixture<TickettravelserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TickettravelserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TickettravelserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

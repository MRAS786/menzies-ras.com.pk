import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CooperativeCLientsComponent } from './cooperative-clients.component';

describe('CooperativeCLientsComponent', () => {
  let component: CooperativeCLientsComponent;
  let fixture: ComponentFixture<CooperativeCLientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CooperativeCLientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CooperativeCLientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

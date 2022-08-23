import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociatecompanyComponent } from './associatecompany.component';

describe('AssociatecompanyComponent', () => {
  let component: AssociatecompanyComponent;
  let fixture: ComponentFixture<AssociatecompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssociatecompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociatecompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

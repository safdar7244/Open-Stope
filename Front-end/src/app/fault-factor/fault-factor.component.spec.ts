import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaultFactorComponent } from './fault-factor.component';

describe('FaultFactorComponent', () => {
  let component: FaultFactorComponent;
  let fixture: ComponentFixture<FaultFactorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaultFactorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaultFactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

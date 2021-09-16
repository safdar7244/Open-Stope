import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsymmetricComponent } from './asymmetric.component';

describe('AsymmetricComponent', () => {
  let component: AsymmetricComponent;
  let fixture: ComponentFixture<AsymmetricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsymmetricComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsymmetricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactorsResComponent } from './factors-res.component';

describe('FactorsResComponent', () => {
  let component: FactorsResComponent;
  let fixture: ComponentFixture<FactorsResComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactorsResComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FactorsResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

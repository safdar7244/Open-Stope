import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StressResComponent } from './stress-res.component';

describe('StressResComponent', () => {
  let component: StressResComponent;
  let fixture: ComponentFixture<StressResComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StressResComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StressResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsymResComponent } from './asym-res.component';

describe('AsymResComponent', () => {
  let component: AsymResComponent;
  let fixture: ComponentFixture<AsymResComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsymResComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsymResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

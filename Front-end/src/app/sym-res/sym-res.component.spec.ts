import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SymResComponent } from './sym-res.component';

describe('SymResComponent', () => {
  let component: SymResComponent;
  let fixture: ComponentFixture<SymResComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SymResComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SymResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

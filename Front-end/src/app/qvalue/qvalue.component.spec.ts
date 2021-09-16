import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QvalueComponent } from './qvalue.component';

describe('QvalueComponent', () => {
  let component: QvalueComponent;
  let fixture: ComponentFixture<QvalueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QvalueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QvalueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

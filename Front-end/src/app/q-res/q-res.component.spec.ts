import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QResComponent } from './q-res.component';

describe('QResComponent', () => {
  let component: QResComponent;
  let fixture: ComponentFixture<QResComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QResComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

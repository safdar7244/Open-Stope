import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SymmetricComponent } from './symmetric.component';

describe('SymmetricComponent', () => {
  let component: SymmetricComponent;
  let fixture: ComponentFixture<SymmetricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SymmetricComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SymmetricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

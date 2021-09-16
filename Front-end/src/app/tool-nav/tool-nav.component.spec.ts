import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolNavComponent } from './tool-nav.component';

describe('ToolNavComponent', () => {
  let component: ToolNavComponent;
  let fixture: ComponentFixture<ToolNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

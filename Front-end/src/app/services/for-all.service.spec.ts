import { TestBed } from '@angular/core/testing';

import { ForAllService } from './for-all.service';

describe('ForAllService', () => {
  let service: ForAllService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForAllService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

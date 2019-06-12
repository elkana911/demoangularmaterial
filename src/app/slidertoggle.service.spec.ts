import { TestBed } from '@angular/core/testing';

import { SlidertoggleService } from './slidertoggle.service';

describe('SlidertoggleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SlidertoggleService = TestBed.get(SlidertoggleService);
    expect(service).toBeTruthy();
  });
});

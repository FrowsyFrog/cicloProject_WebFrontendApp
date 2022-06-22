import { TestBed } from '@angular/core/testing';

import { BikelaneServiceService } from './bikelane-service.service';

describe('BikelaneServiceService', () => {
  let service: BikelaneServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BikelaneServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

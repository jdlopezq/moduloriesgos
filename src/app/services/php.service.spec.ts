import { TestBed, inject } from '@angular/core/testing';

import { PhpService } from './php.service';

describe('PhpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhpService]
    });
  });

  it('should be created', inject([PhpService], (service: PhpService) => {
    expect(service).toBeTruthy();
  }));
});

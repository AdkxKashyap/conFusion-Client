import { TestBed, inject } from '@angular/core/testing';

import { FormsubmitService } from './formsubmit.service';

describe('FormsubmitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormsubmitService]
    });
  });

  it('should be created', inject([FormsubmitService], (service: FormsubmitService) => {
    expect(service).toBeTruthy();
  }));
});

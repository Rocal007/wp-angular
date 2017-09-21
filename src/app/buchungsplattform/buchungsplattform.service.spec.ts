import { TestBed, inject } from '@angular/core/testing';

import { BuchungsplattformService } from './buchungsplattform.service';

describe('BuchungsplattformService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BuchungsplattformService]
    });
  });

  it('should be created', inject([BuchungsplattformService], (service: BuchungsplattformService) => {
    expect(service).toBeTruthy();
  }));
});

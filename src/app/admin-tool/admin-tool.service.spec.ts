import { TestBed, inject } from '@angular/core/testing';

import { AdminToolService } from './admin-tool.service';

describe('AdminToolService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminToolService]
    });
  });

  it('should be created', inject([AdminToolService], (service: AdminToolService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { WpProdukteService } from './produkte.service';

describe('ProdukteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WpProdukteService]
    });
  });

  it('should be created', inject(Wp[ProdukteService], (service: WpProdukteService) => {
    expect(service).toBeTruthy();
  }));
});

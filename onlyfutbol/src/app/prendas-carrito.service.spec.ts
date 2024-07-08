import { TestBed } from '@angular/core/testing';

import { PrendasCarritoService } from './prendas-carrito.service';

describe('PrendasCarritoService', () => {
  let service: PrendasCarritoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrendasCarritoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

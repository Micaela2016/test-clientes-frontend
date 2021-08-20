import { TestBed, inject } from '@angular/core/testing';

import { ClientesService } from './clientes.service';

describe('ClientesService', () => {
    
    let service: ClientesService;
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ClientesService]
        });
        service = TestBed.inject(ClientesService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
import { TestBed, inject } from '@angular/core/testing';

import { ClientesService } from './clientes.service';

describe('ClientesService', () => {
    beforeEach(() => {
        let service: ClientesService;
        TestBed.configureTestingModule({
            providers: [ClientesService]
        });
        service = TestBed.inject(ClientesService);
    });

    it('should be created', inject([ClientesService], (service: ClientesService) => {
        expect(service).toBeTruthy();
    }));
});
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cliente } from '../models/cliente.model';

const httpOption = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    })
};

@Injectable({
    providedIn: 'root'
})
export class ClientesService {

    readonly url = "https://localhost:5001/api/Cliente";


    constructor(private http: HttpClient) {}

    getClientes(){
        return this.http.get<Cliente[]>(this.url,httpOption);

    }


    postClientes(cliente:Cliente){
        return  this.http.post(`${this.url}`,cliente,httpOption);
    }

}
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable } from 'rxjs';

const httpOption = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    })
};

@Injectable({
    providedIn: 'root'
})
export class ClientesService {

    readonly url = "http://localhost:5000/clientes";


    constructor(private http: HttpClient) {
    }

    getClientes(): Observable<any[]>{
        return this.http.get<any>(this.url);
    }


    postClientes(value: any){
        return this.http.post(this.url, value);
    }

}
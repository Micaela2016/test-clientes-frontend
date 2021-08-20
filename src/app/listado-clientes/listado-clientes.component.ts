import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/cliente.model';
import { ClientesService } from './../services/clientes.service';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent implements OnInit {

  public clientes: any [];
  constructor(private clientesService: ClientesService) { }

  ngOnInit(): void {
    this.obtenerCliente();
  }

obtenerCliente(){
    this.clientesService.getClientes().subscribe(res => {
      this.clientes = res;
    });
  }

}

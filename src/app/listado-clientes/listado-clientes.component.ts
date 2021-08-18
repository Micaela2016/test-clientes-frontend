import { Component, OnInit } from '@angular/core';
import { Cliente } from './../modelos/cliente.model';
import { ClientesService } from './../services/clientes.service';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent implements OnInit {

  clientes: Cliente[]
  constructor(private clientesService: ClientesService) { }

  ngOnInit() {
    this.obtenerCliente();
  }

  async obtenerCliente(){
    await this.clientesService.getClientes().subscribe(res => {
      this.clientes = res;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesService } from '../services/clientes.service';
import { Cliente } from './../modelos/cliente.model'
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-formulario-clientes',
  templateUrl: './formulario-clientes.component.html',
  styleUrls: ['./formulario-clientes.component.css']
})
export class FormularioClientesComponent implements OnInit {
    formCliente: FormGroup;

  constructor(private clienteService: ClientesService,private formBuilder: FormBuilder,  private router: Router) {
    this.formCliente = this.formBuilder.group({
      Id: 0,
      Nombre: ['',[Validators.required]],
      Apellido:['',[Validators.required]],
      Direccion: ['',[Validators.required]]
    });
    
  }
  ngOnInit(): void {

  }
  

  
  async guardarCliente(){
    const cliente: Cliente = this.formCliente.value;
    await this.clienteService.postClientes(cliente).subscribe( res => {
      this.router.navigate(['/listado']);
    })
  }

}

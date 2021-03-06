import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesService } from '../services/clientes.service';
import { Cliente } from '../models/cliente.model'
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
      Nombre: ['',[Validators.required, Validators.minLength(2)]],
      Apellido:['',[Validators.required, Validators.minLength(2)]],
      Direccion: ['',[Validators.required, Validators.minLength(2)]]
    });
    
  }
  ngOnInit(): void {

  }
  

  
  guardarCliente(){
    const cliente: Cliente = this.formCliente.value;
    /*const cliente: any = {
      Nombre: this.formCliente.get('Nombre')?.value,
      Apellido: this.formCliente.get('Apellido')?.value,
      Direccion: this.formCliente.get('Direccion')?.value,
    }*/

      this.clienteService.postClientes(cliente).subscribe( res => {
      this.router.navigate(['/listado']);
    })
  }

}

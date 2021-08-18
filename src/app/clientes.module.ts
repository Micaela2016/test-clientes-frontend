import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClientesService } from './services/clientes.service';
import { FormularioClientesComponent} from './formulario-clientes/formulario-clientes.component';
import { ListadoClientesComponent } from './listado-clientes/listado-clientes.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        FormularioClientesComponent,
        ListadoClientesComponent
    ],
    exports: [
        FormularioClientesComponent,
        ListadoClientesComponent
    ],
    providers: [
        ClientesService
    ]
})
export class ClientesModule { }
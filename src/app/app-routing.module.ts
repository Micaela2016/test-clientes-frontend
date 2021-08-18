import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormularioClientesComponent} from './formulario-clientes/formulario-clientes.component';
import {ListadoClientesComponent} from './listado-clientes/listado-clientes.component'
const routes: Routes = [
  { path: '',   redirectTo: '/formulario', pathMatch: 'full' },
  {path: 'formulario', component: FormularioClientesComponent},
  {path: 'listado', component: ListadoClientesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

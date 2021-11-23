import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableroComponent } from './compartido/tablero/tablero.component';
import { VehiculosComponent } from './listados/vehiculos/vehiculos.component';
import { PagesComponent } from './pages.component';
import { entregaCombustibleComponent } from './listados/entregaCombustible/entregaCombustible.component';
import { abmImpresionComponent } from './formulario/abm-impresion/abm-impresion.component';


const routes: Routes = [{
  path: "",
  component: PagesComponent,
  children: [
    { path: "tablero", component: TableroComponent },
    { path: "entregaCombustible", component: entregaCombustibleComponent },
    { path: "vehiculo", component: VehiculosComponent },
    { path: "imprimir/:id", component: abmImpresionComponent },
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

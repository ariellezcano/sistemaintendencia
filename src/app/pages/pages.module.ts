import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { VehiculosComponent } from './listados/vehiculos/vehiculos.component';
import { AbmvehiculosComponent } from './formulario/abmvehiculos/abmvehiculos.component';
import { TableroComponent } from './compartido/tablero/tablero.component';
import { NavComponent } from './compartido/nav/nav.component';
import { FiltrounidadComponent } from './filtros/filtrounidad/filtrounidad.component';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { FooterComponent } from './compartido/footer/footer.component';
import { FiltrovehiculoComponent } from './filtros/filtrovehiculo/filtrovehiculo.component';
import { FiltromodelosComponent } from './filtros/filtromodelos/filtromodelos.component';
import { abmentregaCombustibleComponent } from './formulario/abmentregaCOmbustible/abm.component';
import { entregaCombustibleComponent } from './listados/entregaCombustible/entregaCombustible.component';
import { PersonalComponent } from './filtros/filtropersonal/personal.component';
import { abmImpresionComponent } from './formulario/abm-impresion/abm-impresion.component';
import { FiltroVehiculoSoloComponent } from './filtros/filtro-vehiculo-solo/filtro-vehiculo-solo.component';
import { FiltroCombustibleComponent } from './filtros/filtro-combustible/filtro-combustible.component';

@NgModule({
  declarations: [
    PagesComponent,
    abmentregaCombustibleComponent,
    VehiculosComponent,
    AbmvehiculosComponent,
    FiltrounidadComponent,
    TableroComponent,
    NavComponent,
    FooterComponent,
    FiltrovehiculoComponent,
    FiltromodelosComponent,
    entregaCombustibleComponent,
    PersonalComponent,
    abmImpresionComponent,
    FiltroVehiculoSoloComponent,
    FiltroCombustibleComponent,

  ],
  exports: [
    TableroComponent,
    NavComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    PagesRoutingModule,
    FormsModule,
    HttpClientModule,
  ],

  providers: [],
  bootstrap: [PagesComponent],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],

})
export class PagesModule { }

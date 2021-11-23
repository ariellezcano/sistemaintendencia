import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { entregaCombustible } from 'src/app/modelos/entregaCombustible';
import { entregaCombustibleService } from 'src/app/servicio/entregaCombustible.service';


@Component({
  selector: 'app-filtro-combustible',
  templateUrl: './filtro-combustible.component.html',
  styleUrls: ['./filtro-combustible.component.scss']
})
export class FiltroCombustibleComponent implements OnInit {

  @Output()
  resultado = new EventEmitter<entregaCombustible[]>();

  criterio: String;

  items: entregaCombustible[]

  constructor(private wsdl: entregaCombustibleService) { }

  ngOnInit() {
  }

  seleccionarEntregaCombustible() {
    this.resultado.emit(this.items);
  }

  async buscar() {
    const crit = "(c.vehiculo.identificacionPol like '%" + this.criterio + "%' or c.nroSerie like '%" + this.criterio + "%') AND c.activo=true";
    let data = await this.wsdl.doCriteria(crit, false, null, " ORDER BY c.fecha ASC", 1, 100).then();
    console.log(data)
    const result = JSON.parse(JSON.stringify(data));
    // alert(JSON.stringify(data))
    if (result.status === 200) {
      this.items = result.data;


    } else if (result.status === 666) {
      // logout app o refresh token
      this.items = [];

    } else {
      //  this.persona = new Persona();
      this.items = [];
    }
    this.resultado.emit(this.items);
  }
}

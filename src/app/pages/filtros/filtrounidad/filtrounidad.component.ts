import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UnidadService } from 'src/app/servicio/unidad';
import { Unidad } from 'src/app/modelos/unidad';

@Component({
  selector: 'app-filtrounidad',
  templateUrl: './filtrounidad.component.html',
  styleUrls: ['./filtrounidad.component.scss']
})

export class FiltrounidadComponent implements OnInit {
  @Output()
  resultado = new EventEmitter<Unidad[]>();

  criterio: String;

  items: Unidad[]

  constructor(private wsdl: UnidadService) { }

  ngOnInit() {
  }

  seleccionaruni() {
    this.resultado.emit(this.items);
  }

  async buscarUnidad() {
    const crit = "(c.nombre like '%" + this.criterio + "%' or c.cuof like '%" + this.criterio + "%') AND c.activo=true";
    let data = await this.wsdl.doCriteria(crit, false, null, " ORDER BY c.nombre ASC", 1, 100).then();

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

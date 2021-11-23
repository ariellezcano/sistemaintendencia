import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Unidad } from 'src/app/modelos/unidad';
import { UnidadService } from 'src/app/servicio/unidad';
import { Modelo } from 'src/app/modelos/modelo';
import { ModeloService } from 'src/app/servicio/modelos.service';

@Component({
  selector: 'app-filtromodelos',
  templateUrl: './filtromodelos.component.html',
  styleUrls: ['./filtromodelos.component.scss']
})
export class FiltromodelosComponent implements OnInit {

  @Output()
  resultado = new EventEmitter<Modelo[]>();

  criterio: String;

  items: Modelo[]

  constructor(private wsdl: ModeloService) { }

  ngOnInit() {
  }

  seleccionarmodel() {
    this.resultado.emit(this.items);
  }

  async buscarmodelo() {
    const crit = "(c.nombre like '%" + this.criterio + "%' or c.marca.nombre like '%" + this.criterio + "%') AND c.activo=true";
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

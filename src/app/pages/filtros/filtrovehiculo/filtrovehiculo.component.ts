import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, Input } from '@angular/core';
import { Unidad } from 'src/app/modelos/unidad';
import { VehiculosService } from 'src/app/servicio/vehiculo.service';
import { Vehiculo } from 'src/app/modelos/vehiculo';
import { Persona } from 'src/app/modelos/persona';

@Component({
  selector: 'app-filtrovehiculo',
  templateUrl: './filtrovehiculo.component.html',
  styleUrls: ['./filtrovehiculo.component.scss']
})
export class FiltrovehiculoComponent implements OnInit {


  @Output()
  resultado = new EventEmitter<Vehiculo>();

  criterio: String;

  items: Vehiculo[];
  item: Vehiculo;

  constructor(private wsdl: VehiculosService) { }

  ngOnInit() {
  }
  compareFn(c1: Vehiculo, c2: Vehiculo): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
  onChange(item: Vehiculo) {

    this.resultado.emit(item);
  }

  async buscar() {
    const crit = "(c.identificacionPol like '%" + this.criterio + "%' or c.unidad.nombre like '%" + this.criterio + "%') AND c.activo=true";
    let data = await this.wsdl.doCriteria(crit, false, null, " ORDER BY c.identificacionPol ASC", 1, 100).then();

    const result = JSON.parse(JSON.stringify(data));

    if (result.status === 200) {
      this.items = result.data;
      if (this.items.length === 0) {
        this.item = new Vehiculo();
        this.item = this.items[0]
      }


    } else if (result.status === 666) {
      // logout app o refresh token
      this.items = [];

    } else {
      //  this.persona = new Persona();
      this.items = [];
    }

  }
  @Input()
  set dibujar(item: Vehiculo) {
    if (item === null || item === undefined) {
      //alert("no datos " + JSON.stringify(item))
      this.item = new Vehiculo();
    } else {
      this.items = [];
      //alert("datos " + JSON.stringify(item))
      this.item = item;
      this.items.push(item)

    }
  }
}












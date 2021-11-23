import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { entregaCombustible } from 'src/app/modelos/entregaCombustible';
import { NgForm } from '@angular/forms';
import { entregaCombustibleService } from 'src/app/servicio/entregaCombustible.service';
import { Persona } from 'src/app/modelos/persona';
import { Vehiculo } from 'src/app/modelos/vehiculo';
import * as moment from 'moment';
import { UturuncoUtils } from 'src/app/servicio/uturuncoUtils';

@Component({
  selector: 'app-abmentregaCombustible',
  templateUrl: './abm.component.html',
  styleUrls: ['./abm.component.scss']
})
export class abmentregaCombustibleComponent implements OnInit {



  @ViewChild("form", { static: false }) form: NgForm;

  @Output()
  finalizado = new EventEmitter<Boolean>();

  /* declaracion de la variable tipo marca */
  @Input()
  item: entregaCombustible;



  /*   wsdl es el servicio que se va a comunicar entre la api y la vista.
*/
  constructor(private wsdl: entregaCombustibleService) { }

  /**
     * ngOnInit se ejecuta cuando se termina de dibujar la vista
     * y solicita los primeros 100 datos de la tabla de BD
     */
  ngOnInit() {

  }

  @Input()
  set select(item: entregaCombustible) {


    if (item.id === undefined) {
      this.item = new entregaCombustible();

    } else {

      this.item = new entregaCombustible();
      this.item = item;
    }
  }

  accion(f: NgForm) {

    if (f.invalid) {
      // this.form.ngSubmit;
      return
    }
    if (this.item.id > 0) {
      this.editar();

    } else {
      this.nuevo();

    }

  }

  /*
  funcion para crear nueva entrega de combustible
  */
  nuevo() {

    this.item.activo = true;
    this.wsdl.doInsert(this.item).then((data: any) => {
      if (data.status === 200) {
        this.finalizado.emit(true)
      } else {
        alert("Hubo un error en la creación" + JSON.stringify(this.item))
      }
    })
  }

  /*
    funcion para crear editar marca
    */

  editar() {
    this.wsdl.doUpdate(this.item, this.item.id).then((data: any) => {
      if (data.status === 200) {
        this.finalizado.emit(true)
      } else {
        alert("Hubo un error en la creación")
      }
    })
  }



  personasencontradas(item: Persona) {
    if (item.id !== undefined) {
      this.item.empleadoRetiro = item;
      let pers = JSON.parse(UturuncoUtils.getSession("personal"))
      this.item.empleado.id = pers.id;
    }


  }
  vehiculoSel(item: Vehiculo) {
    if (item.id !== undefined) {
      this.item.vehiculo = item;

    } else {
      alert("Hubo un error en la creación" + JSON.stringify(item))
    }


  }

  parseDate(fecha) {
    if (moment(fecha).isValid()) {

      return moment(fecha).toDate();
    }
  }

}

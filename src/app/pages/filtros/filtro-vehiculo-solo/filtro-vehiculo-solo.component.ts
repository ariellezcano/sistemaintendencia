import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Vehiculo } from 'src/app/modelos/vehiculo';
import { VehiculosService } from 'src/app/servicio/vehiculo.service';

@Component({
  selector: 'app-filtro-vehiculo-solo',
  templateUrl: './filtro-vehiculo-solo.component.html',
  styleUrls: ['./filtro-vehiculo-solo.component.scss']
})
export class FiltroVehiculoSoloComponent implements OnInit {


  @Output()
  resultado = new EventEmitter<Vehiculo[]>();

  criterio: String;

  items: Vehiculo[]

  constructor(private wsdl: VehiculosService) { }

  ngOnInit() {
  }

  seleccionarVehiculo() {
    this.resultado.emit(this.items);
  }

  async buscar() {
    const crit = "(c.identificacionPol like '%" + this.criterio + "%' or c.unidad.nombre like '%" + this.criterio + "%'  or c.dominio like '%" + this.criterio + "%') AND c.activo=true";
    let data = await this.wsdl.doCriteria(crit, false, null, " ORDER BY c.identificacionPol ASC", 1, 100).then();

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

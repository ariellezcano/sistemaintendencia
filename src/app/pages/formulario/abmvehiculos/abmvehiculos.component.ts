import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { VehiculosService } from 'src/app/servicio/vehiculo.service';
import { Vehiculo } from 'src/app/modelos/vehiculo';
import { Estados } from 'src/app/modelos/estados';
import { EstadosService } from 'src/app/servicio/estados.service';
import { Tipocombustible } from 'src/app/modelos/tipocombustible';
import { Modelo } from 'src/app/modelos/modelo';
import { Tipovehiculo } from 'src/app/modelos/tipovehiculo';
import { Unidad } from 'src/app/modelos/unidad';
import { TipoCombustibleService } from 'src/app/servicio/tipocombustible.service';
import { ModeloService } from 'src/app/servicio/modelos.service';
import { TipoVehiculoService } from 'src/app/servicio/tipovehiculo.service';
import { UnidadService } from 'src/app/servicio/unidad';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-abmvehiculos',
  templateUrl: './abmvehiculos.component.html',
  styleUrls: ['./abmvehiculos.component.scss']
})
export class AbmvehiculosComponent implements OnInit {
  @ViewChild("f", { static: false }) form: NgForm;
  @ViewChild("collapse", { static: false }) collapse: ElementRef;

  @Output()
  finalizado = new EventEmitter<Boolean>();

  /* declaracion de la variables */
  @Input()
  item: Vehiculo;
  msg

  estados: Estados[];
  combustibles: Tipocombustible[];
  modelos: Modelo[];
  tipovehiculos: Tipovehiculo[];
  unidades: Unidad[];


  /*   wsdl es el servicio que se va a comunicar entre la api y la vista.
 */
  constructor(private wsdl: VehiculosService, private wsdlUni: UnidadService, private wsdlTv: TipoVehiculoService, private wsdlEs: EstadosService, private wsdlMo: ModeloService, private wsdlC: TipoCombustibleService) {


    this.estados = [];
    this.listarestados();
    this.listarcombustibles();
    this.listarmodelos();
    this.listartipovehiculos();


    // this.unidadesEncontradas;
  }

  @Input()
  set select(item: Vehiculo) {
    this.msg = "";
    this.unidades = [];
    if (item.id === undefined) {
      this.item = new Vehiculo();

    } else {
      this.unidades.push(item.unidad);
      this.item = new Vehiculo();
      this.item = item;
    }
  }

  listarestados() {
    this.wsdlEs.getList(1, 100).then((data: any) => {
      this.estados = data.data

    })
  }
  listarcombustibles() {
    this.wsdlC.getList(1, 100).then((data: any) => {
      this.combustibles = data.data

    })
  }
  listarmodelos() {
    this.wsdlMo.getList(1, 100).then((data: any) => {
      this.modelos = data.data

    })
  }
  listartipovehiculos() {
    this.wsdlTv.getList(1, 100).then((data: any) => {
      this.tipovehiculos = data.data

    })
  }

  // listarunidades() {
  //   this.wsdlUni.getList(1, 100).then((data: any) => {
  //     this.unidades = data.data

  //   })
  // }

  compareFnEs(c1: Estados, c2: Estados): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
  compareFnTc(c1: Tipocombustible, c2: Tipocombustible): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
  compareFnMo(c1: Modelo, c2: Modelo): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
  compareFnTv(c1: Tipovehiculo, c2: Tipovehiculo): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
  compareFnUni(c1: Unidad, c2: Unidad): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  /**
     * ngOnInit se ejecuta cuando se termina de dibujar la vista
     * y solicita los primeros 100 datos de la tabla de BD
     */
  ngOnInit() {


  }

  unidadesEncontradas(event: Unidad[]) {
    this.unidades = event;
    this.collapse.nativeElement.click();
    this.item.unidad = this.unidades[0];



  }

  accion(f: NgForm) {

    if (f.invalid) {
      this.form.ngSubmit;
      return
    }
    if (this.item.id > 0) {
      this.editar();

    } else {
      this.nuevo();

    }
    // alert(JSON.stringify(this.item));
  }

  /*
  funcion para crear nueva marca
  */
  nuevo() {
    this.item.activo = true;
    this.wsdl.doInsert(this.item).then((data: any) => {
      if (data.status === 200) {
        this.finalizado.emit(true)
      } else {
        this.msg = data.msg;
        // alert("Hubo un error en la creación " + data.data)
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
        // alert("Hubo un error en la creación")
      }
    })
  }


}
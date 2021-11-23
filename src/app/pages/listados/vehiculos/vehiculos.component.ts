import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Vehiculo } from 'src/app/modelos/vehiculo';
import { VehiculosService } from 'src/app/servicio/vehiculo.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.scss']
})
export class VehiculosComponent implements OnInit {

  @ViewChild("collapse", { static: false }) collapse: ElementRef;

  @ViewChild("close", { static: false }) close: ElementRef;

  @Output()
  finalizado = new EventEmitter<Boolean>();

  public items: Vehiculo[]
  public item: Vehiculo;

  constructor(private wsdl: VehiculosService) {

    this.item = new Vehiculo();
    this.items = []



  }

  encontrados(event: Vehiculo[]) {
    this.items = event;
    this.collapse.nativeElement.click();




  }

  accion(event: Boolean) {
    this.close.nativeElement.click();
    if (event) {
      Swal.fire(

        {
          position: 'top',
          icon: 'success',
          title: 'Se actualizo correctamente el fichero.',
          showConfirmButton: false,
          timer: 1500
        }


      )
    }
  }


  eliminar() {
    this.item.activo = !this.item.activo;
    this.wsdl.doUpdate(this.item, this.item.id).then((data: any) => {
      if (data.status === 200) {
        Swal.fire(
          'Eliminado!',
          'Se a eliminado correctamente el archivo.',
          'success'
        )
      } else {
        Swal.fire(
          'error',
          'a ocurrido un error:) ' + data.msg,
          'error'
        )
      }
    })
  }

  preEliminar(item: Vehiculo) {
    this.item = item;
    Swal.fire({
      title: 'Usted está seguro de eliminar?',
      text: 'Desea eliminar el archivo!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminalo!',
      cancelButtonText: 'No, esperar'
    }).then((result) => {
      if (result.value) {

        this.eliminar();
        // For more information about handling dismissals please visit
        // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelado',
          'Se Cancelo la operacion :)',
          'error'
        )
      }
    })


  }

  seleccionado(tipodecombustible: Vehiculo) {
    this.item = tipodecombustible;
  }
  nuevo() {
    this.item = new Vehiculo();
  }


  ngOnInit() {
    this.wsdl.getList(1, 1000).then((data: any) => {
      // alert(JSON.stringify(data))
      if (data.status = 200) {
        this.items = JSON.parse(JSON.stringify(data.data))
      } else {
        alert("error")
      }

    })
  }

}

import { Component, OnInit, Input, ViewChild, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { entregaCombustible } from 'src/app/modelos/entregaCombustible';
import { NgForm } from '@angular/forms';
import { entregaCombustibleService } from 'src/app/servicio/entregaCombustible.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-abm-impresion',
  templateUrl: './abm-impresion.component.html',
  styleUrls: ['./abm-impresion.component.scss']
})
export class abmImpresionComponent implements OnInit {

  id: number;


  @ViewChild("form", { static: false }) form: NgForm;

  @Output()
  finalizado = new EventEmitter<Boolean>();

  /* declaracion de la variable tipo marca */
  @Input()
  item: entregaCombustible;



  /*   wsdl es el servicio que se va a comunicar entre la api y la vista.
*/
  constructor(private route: ActivatedRoute, private wsdl: entregaCombustibleService) {
    this.route.paramMap.subscribe((p: any) => {
      this.id = p.params.id;
      this.buscar(this.id);
    });
  }
  async buscar(id) {
    let data = await this.wsdl.doFind(id).then();
    console.log(data, this.id)
    const result = JSON.parse(JSON.stringify(data));
    // alert(JSON.stringify(data))
    if (result.status === 200) {
      this.item = result.data;


    } else if (result.status === 666) {
      // logout app o refresh token
      this.item = new entregaCombustible();

    } else {
      //  this.persona = new Persona();
      this.item = new entregaCombustible();
    }


  }

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
  imprimir() {
    window.print()

  }

}

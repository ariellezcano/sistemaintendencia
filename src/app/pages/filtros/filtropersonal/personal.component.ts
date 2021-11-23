import { Component, OnInit, Output, EventEmitter, Input, ViewChild, ElementRef } from '@angular/core';
import { Persona } from 'src/app/modelos/persona';
import { DatoPolicial } from 'src/app/modelos/datoPolicial';
import { DatoPolicialService } from 'src/app/servicio/datopolicial.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {

  @ViewChild("txtDNI", { static: true }) txtDNI: ElementRef;



  public focus(boo: boolean) {
    if (boo) {
      this.txtDNI.nativeElement.focus()
    }
  }

  @Output() select = new EventEmitter<Persona>()

  dni: String;
  persona: Persona;
  policia: DatoPolicial;
  spolicia: String;


  constructor(private wsdl: DatoPolicialService) {


  }

  ngOnInit() {

  }

  @Input()
  set dibujar(item: Persona) {
    this.persona = item;
    if (this.persona === null || this.persona === undefined) {
      return


    }

    if ((this.policia === null || this.policia === undefined) && this.persona.apellido !== undefined) {
      this.spolicia = this.persona.apellido.toUpperCase() + ", " + this.persona.nombre;

    } else if (this.persona.apellido !== undefined) {

      this.spolicia = this.persona.apellido.toUpperCase() + ", " + this.persona.nombre + " " + this.policia.jerarquia.nombre + " " + this.policia.plaza

    }

    this.dni = item.norDni

  }


  async buscar() {


    this.persona = new Persona();

    const crit = "( c.persona.norDni like '" + this.dni + "' OR c.credencialNro like '" + this.dni + "') AND c.activo=true";
    let data = await this.wsdl.doCriteria(crit, true, null, " ORDER BY c.persona.apellido ASC", 1, 10).then();
    const result = JSON.parse(JSON.stringify(data));
    if (result.status === 200) {
      this.policia = result.data;
      this.persona = this.policia.persona;
      this.spolicia = this.persona.apellido.toUpperCase() + ", " + this.persona.nombre + " " + this.policia.jerarquia.nombre + " " + this.policia.plaza
      this.select.emit(this.persona)
    } else if (result.status === 666) {

      // logout app o refresh token

    } else {
      this.persona = new Persona();

    }


  }





}

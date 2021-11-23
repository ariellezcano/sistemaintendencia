import { Component, OnInit } from '@angular/core';
import { UturuncoUtils } from 'src/app/servicio/uturuncoUtils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  usuario: string;

  constructor(private route: Router) { }

  ngOnInit() {

    this.usuario = JSON.parse(UturuncoUtils.getSession("user")).apellido + ' ' + JSON.parse(UturuncoUtils.getSession("user")).nombre

  }
  cerrar() {
    UturuncoUtils.clearSession()
    this.route.navigate(["/login"]);
  }

}

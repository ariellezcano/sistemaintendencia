import { Persona } from './persona';
import { Diagnostico } from './diagnostico';
import { Movil } from './movil';

export class OrdenDeTrabajo {
    id: number;
    kmIngresaVehiculo: number;
    kmIngresaRetira: number;
    empleadoRetiro: Persona;
    fechaIngreso: Date;
    fechaEgreso: Date;
    fechaVerificacion: Date;
    diasTrabajo: number;
    interna: boolean;
    observacion: string;
    precio: number;
    activo: boolean;
    diagnostico: Diagnostico;
    usuarioDiagnostico: Persona;
    usuarioIngreso: Persona;
    empleado: Persona;
    vehiculo: Movil;


    constructor() { }
}
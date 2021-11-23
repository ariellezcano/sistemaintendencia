import { Vehiculo } from './vehiculo';
import { Persona } from './persona';

export class entregaCombustible {

    id: number;
    fecha: Date;
    cantidad: number;
    nroSerie: String;
    observacion: String;
    vehiculo: Vehiculo;
    activo: Boolean;
    empleado: Persona;
    empleadoRetiro: Persona;

    constructor() {
        this.empleadoRetiro = new Persona();
        this.empleado = new Persona();
        this.vehiculo = new Vehiculo();
    }
}

import { Persona } from './persona';
import { Unidad } from './unidad';

export class PasePolicial {
    id: Number;
    fechaNotificacion: Date;
    fechaPresentacion: Date;
    instrumentoLegal: String;
    activo: Boolean;
    persona: Persona;
    unidad: Unidad;

    constructor() {

    }
}
import { Persona } from './persona';
import { Unidad } from './unidad';
import { Armamento } from './armamento';

export class PasePolicial {
    id: Number;
    fechaEntrega: Date;
    fechaDevolusion: Date;
    estado: String;
    arma: Armamento;
    activo: Boolean;
    persona: Persona;

    constructor() {

    }
}
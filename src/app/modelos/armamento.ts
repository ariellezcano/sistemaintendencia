import { EstadoArma } from './estadoArma';
import { ModeloArma } from './modeloArma';


export class Armamento {
    id: Number;
    nroSerie: String;
    nombre: String;
    estado: EstadoArma;
    modelo: ModeloArma;
    activo: Boolean;

    constructor() {
    }
}
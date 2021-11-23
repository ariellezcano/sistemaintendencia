import { ModeloArma } from './modeloArma';
import { EstadoArma } from './estadoArma';

export class MaterialControlado {
    id: Number;
    nroSerie: string;
    denominacion: string;
    estado: EstadoArma;
    modelo: ModeloArma;

    activo: Boolean;
    constructor() {

    }
}
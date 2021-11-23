import { MarcaArma } from './marcaArma';
import { TipoArma } from './tipoArma';

export class ModeloArma {
    id: Number;
    nombre: String;
    calibre: String;;
    marca: MarcaArma;
    tipoArma: TipoArma;
    activo: Boolean;
    constructor() {
    }
}
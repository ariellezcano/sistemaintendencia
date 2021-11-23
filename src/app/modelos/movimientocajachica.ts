import { Usuario } from './usuario';
import { CajaChica } from './cajachica';

export class MovimientoCajaChica {
    id: number;
    fecha: Date;
    monto: number;
    saldo: number;
    caja: CajaChica;
    usuario: Usuario;
    activo: boolean;

    constructor() { }
}
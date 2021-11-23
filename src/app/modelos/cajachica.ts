import { Division } from './division';

export class CajaChica {
    id: number;
    fechaApertura: Date;
    fechaCierre: Date;
    monto: number;
    saldo: number;
    division: Division;
    activo: boolean;

    constructor() { }
}
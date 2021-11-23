import { Compras } from './compras';
import { Repuestos } from './repuesto';

export class DetallesCompras {
    id: number;
    compra: Compras;
    repuesto: Repuestos;
    activo: boolean;

    constructor() { }
}
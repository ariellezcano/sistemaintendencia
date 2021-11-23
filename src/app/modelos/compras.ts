import { Repuestos } from './repuesto';
import { Proveedor } from './proveedor';
import { Usuario } from './usuario';

export class Compras {
    id: number;
    fecha: Date;
    ordenCompraNum: number;
    proveedor: Proveedor;
    usuario: Usuario;
    repuesto: Repuestos;
    activo: boolean;

    constructor() { }
}
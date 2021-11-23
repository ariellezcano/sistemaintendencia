import { Proveedor } from './proveedor';
import { Producto } from './producto';

export class Repuestos {
    id: number;
    stock: number;
    descripcion: string;
    fechaIngreso: Date;
    nroOrdenCompra: number;
    ubicacion: string;
    precio: number;
    producto: Producto;
    proveedor: Proveedor;
    nombre: string;
    activo: boolean;

    constructor() { }
}
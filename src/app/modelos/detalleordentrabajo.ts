import { OrdenDeTrabajo } from './ordendetrabajo';
import { TipoReparacion } from './tiporeparacion';
import { Repuestos } from './repuesto';

export class DetalleOrdenTrabajo {
    id: number;
    cantidad: number;
    observacion: string;
    precio: number;
    activo: boolean;
    ordenTrabajo: OrdenDeTrabajo;
    tipoReparacion: TipoReparacion;
    repuesto: Repuestos;
    constructor() { }
}
import { Unidad } from './unidad';
import { Persona } from './persona';

export class Division {
    id: number;
    nombre: string;
    activo: boolean;
    unidad: Unidad;
    personaReferente: Persona;

    constructor() { }
}
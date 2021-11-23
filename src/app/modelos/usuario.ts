import { Persona } from './persona';
import { Roles } from './roles';

export class Usuario {
    id: number;
    nombre: string;
    clave: string;
    activo: boolean;
    persona: Persona;
    rol: Roles;

    constructor() { }
}
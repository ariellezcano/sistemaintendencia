import { Sexo } from './sexo';

import { TipoDocumento } from './tipoDocumento';

export class Persona {
    id: Number;
    nombre: String;
    apellido: String;
    norDni: String;
    email: String;
    nroTelefono: String;
    grupoS: String;
    factor: String;
    fechaNacimiento: Date;
    nroLegajo: Number;
    anoIngresoPolicia: Date;
    anosServicio: Number;;
    mesesServicio: Number;;
    diasServicio: Number;;
    anosOtroServicio: Number;;
    mesesOtroServicio: Number;;
    diasOtroServicio: Number;;
    activo: Boolean;
    sexo: Sexo;
    tipoDocumento: TipoDocumento;

    constructor() {
        this.sexo = new Sexo();
        this.tipoDocumento = new TipoDocumento();

    }
}
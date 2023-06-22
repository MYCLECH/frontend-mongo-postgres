import { Ubigeo } from "./ubigeo";

export class Proveedor {
    razonSocial!: string;
    ruc!: string;
    direccion!: string;
    telefono!: string;
    celular!: string;
    contacto!: string;
    estado!: string;
    fechaRegistro!: Date;
    ubigeo!: Ubigeo;
}

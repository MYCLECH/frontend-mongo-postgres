import { Ubigeo } from "./ubigeo";

export class Cliente {
    nombres!: string;
    apellidos!: string;
    fechaNacimiento!: Date;
    dni!: string;
    correo!: string;
    fechaRegistro!: Date;
    direccion!: string;
    estado!: boolean;
    ubigeo!: Ubigeo;
}

export class Paciente {
    id?: number;
    nombre: string;
    edad: number;
    direccion: string;
    telefono: number;

    constructor(id: number, nombre: string, edad: number, direccion: string, telefono: number) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.direccion = direccion;
        this.telefono = telefono;
    }
}



import { Camillero } from "./camillero";
import { Paciente } from "./paciente";

export class Servicio {
    id: number; // ? no es campo obligatorio, en algunas ocasiones tendra el id y en otras no
    fecha: string;
    servicioSolicitado: string;
    destinoServicio: string;
    solicitante: string;
    transporte: string;
    insumo: string;
    familiar: string;
    aislamiento: string;
    observaciones: string;
    paciente?: Paciente;
    idPaciente?: number;
    nombrePaciente: string;
    camillero?: Camillero;
    idCamillero?: number;

    constructor(id: number, fecha: string, servicioSolicitado: string, destinoServicio: string, solicitante: string,
        transporte: string, insumo: string, familiar: string, aislamiento: string, observaciones: string, idPaciente: number, nombrePaciente: string) {
            this.id = id;
            this.fecha = fecha;
            this.servicioSolicitado = servicioSolicitado;
            this.destinoServicio = destinoServicio;
            this.solicitante = solicitante;
            this.transporte =transporte;
            this.insumo = insumo;
            this.familiar = familiar;
            this.aislamiento = aislamiento;
            this.observaciones = observaciones;
            this.idPaciente = idPaciente;
            this.nombrePaciente = nombrePaciente;
        }

}

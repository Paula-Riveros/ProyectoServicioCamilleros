import { Camillero } from "./camillero";
import { Genareser } from "./genareser";
import { Genpacien } from "./genpacien";

export class Servicio {
    id: number; // ? no es campo obligatorio, en algunas ocasiones tendra el id y en otras no
    fecha: string;

    genareser?: Genareser;
    servicioSolicitado: number;

    destinoServicio: string;
    solicitante: string;
    transporte: string;
    insumo: string;
    familiar: string;
    aislamiento: boolean;
    observaciones: string;
    // paciente?: Paciente;
    // idPaciente?: number;
    nombrePaciente: string;
    genpacien?: Genpacien;
    docPaciente: string;

    camillero?: Camillero;
    idCamillero?: number;

    horaEnvio: string;
    horaAsignacion: string;
    horaEjecucion: string;
    horaFinalizacion: string;
    cancelado: boolean;
    motivoCancelado: string;

    constructor(id: number, fecha: string, servicioSolicitado: number, destinoServicio: string, solicitante: string,
        transporte: string, insumo: string, familiar: string, aislamiento: boolean, observaciones: string, 
        docPaciente: string, nombrePaciente: string, horaEnvio: string, horaAsignacion: string, horaEjecucion: string,
        horaFinalizacion: string, cancelado: boolean, motivoCancelado: string) {
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
            this.docPaciente = docPaciente;
            this.nombrePaciente = nombrePaciente;
            this.horaEnvio = horaEnvio;
            this.horaAsignacion = horaAsignacion;
            this.horaEjecucion = horaEjecucion;
            this.horaFinalizacion = horaFinalizacion;
            this.cancelado = cancelado;
            this.motivoCancelado = motivoCancelado;
        }

}

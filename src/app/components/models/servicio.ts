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
    idPaciente?: number;
    idCamillero?: number;

    constructor(id: number, fecha: string, servicioSolicitado: string, destinoServicio: string, solicitante: string,
        transporte: string, insumo: string, familiar: string, aislamiento: string, observaciones: string, 
        idPaciente: number) {
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
        }
}

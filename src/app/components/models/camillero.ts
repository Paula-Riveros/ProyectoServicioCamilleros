export class Camillero {
    idCamillero: number;
    nombreCamillero: string;
    emailCamillero: string;
    estadoCamillero: boolean;

    constructor(idCamillero: number, nombreCamillero: string, emailCamillero: string, estadoCamillero: boolean) {
        this.idCamillero = idCamillero;
        this.nombreCamillero = nombreCamillero;
        this.emailCamillero = emailCamillero;
        this.estadoCamillero = estadoCamillero;
    }
}

export class JwtDTO {
    token: string;
    // type!: string;
    // nombreUsuario: string;
    // authorities: string[];
    // cambioClave: number;

    // , nombreUsuario: string, authorities: string[], cambioClave: number
    constructor(token: string) {
        this.token = token;
        // this.nombreUsuario = nombreUsuario;
        // this.authorities = authorities;
        // this.cambioClave = cambioClave;
    }
}

export class Genpacien {
    oid: number;
    pacnumdoc: string;
    pacprinom: string;
    pacsegnom: string;
    pacpriape: string;
    pacsegape: string;

    constructor(oid: number, pacnumdoc: string, pacprinom: string, pacsegnom: string, pacpriape: string, pacsegape: string) {
        this.oid = oid;
        this.pacnumdoc = pacnumdoc;
        this.pacprinom = pacprinom;
        this.pacsegnom = pacsegnom;
        this.pacpriape = pacpriape;
        this.pacsegape = pacsegape;
    }
}

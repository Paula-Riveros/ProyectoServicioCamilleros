import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GenareserService } from 'src/app/service/genareser.service';
import { GenpacienService } from 'src/app/service/genpacien.service';
import { ServicioService } from 'src/app/service/servicio.service';
import { TokenService } from 'src/app/service/token.service';
import { Genareser } from '../../models/genareser';
import { Servicio } from '../../models/servicio';

@Component({
  selector: 'app-nuevo-servicio',
  templateUrl: './nuevo-servicio.component.html',
  styleUrls: ['./nuevo-servicio.component.css']
})
export class NuevoServicioComponent implements OnInit {

  id!: number;
  fecha = '';

  genaresers: Genareser[] = [];
  servicioSolicitado: number = 0;
  solicitante: string = '';
  destinoServicio: number = 0;
  transporte: string = '';
  insumo: string = '';
  familiar: string = '';
  aislamiento!: boolean;
  observaciones: string = '';
  docPaciente: string = '';
  nombrePaciente: string = '';
  
  horaEnvio = '';
  horaAsignacion = '00:00:00';
  horaEjecucion = '00:00:00';
  horaFinalizacion = '00:00:00';

  tiempoTotal: number = 0;

  cancelado: Boolean = false;
  motivoCancelado: string = '';
  horaCancelacion = '00:00:00'

  isAdmin = false;
  isSuperadmin = false;

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;


  constructor(private servicioService: ServicioService, private genpacienService: GenpacienService,
    private toastr: ToastrService, private router: Router, private tokenService: TokenService, 
    private genareserService: GenareserService) { }


  ngOnInit(): void {
    this.fechaActual();
    this.listaSolicitados();
    this.isAdmin = this.tokenService.isAdmin();
    this.isSuperadmin = this.tokenService.isSuperadmin();
  }

  fechaActual(): void {
    const nowFecha = new Date();
    const day = ("0" + nowFecha.getDate()).slice(-2);
    const month = ("0" + (nowFecha.getMonth() + 1)).slice(-2);
    const today = nowFecha.getFullYear() + "-" + (month) + "-" + (day);
    (document.getElementById("fecha") as HTMLInputElement).value = today;
    this.fecha = nowFecha.getFullYear() + "-" + (month) + "-" + (day);
  }

  horaEnvioServicio(): void {
    const nowHora = new Date();
    const hora = ("0" + nowHora.getHours()).slice(-2);
    const min = ("0" + nowHora.getMinutes()).slice(-2);
    const seg = ("0" + nowHora.getSeconds()).slice(-2);
    this.horaEnvio = hora + ":" + min + ":" + seg;
  }

  onCreate(): void {
    const servicio = new Servicio(this.id, this.fecha, this.servicioSolicitado, this.solicitante, this.destinoServicio, this.transporte,
      this.insumo, this.familiar, this.aislamiento, this.observaciones, this.docPaciente, this.nombrePaciente, this.horaEnvio,
      this.horaAsignacion, this.horaEjecucion, this.horaFinalizacion, this.tiempoTotal, this.cancelado, this.motivoCancelado, this.horaCancelacion);
    this.servicioService.save(servicio).subscribe(
      data => {
        this.toastr.success('Servicio enviado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/camilleros/servicio/lista']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        // this.router.navigate(['/camilleros/servicio/lista']);
      }
    );
  }

  listaSolicitados(): void {
    this.genareserService.lista().subscribe(
      data => {
        this.genaresers = data;
      }, 
      err => {
        console.log(err);
      }
    );
  }

  buscarNombrePaciente() {
    let valor: string = this.txtBuscar.nativeElement.value;

    //Si es vacía la cadena recibida, finalizar la función
    if (valor.trim().length == 0) { return; }
    // console.log(valor);
    // this.pacienteService.detail(parseInt(valor)).subscribe(
    this.genpacienService.detailPacnumdoc(valor).subscribe(
      data => {
        this.nombrePaciente = data.pacprinom.concat(' ', data.pacsegnom).concat(' ', data.pacpriape).concat(' ', data.pacsegape);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
      }
    );

    //you are telling TypeScript that you are certain that value is not null or undefined.
    // this.txtBuscar.nativeElement.value = '';
  }

}

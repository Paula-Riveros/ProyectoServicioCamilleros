import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GenareserService } from 'src/app/service/genareser.service';
import { ServicioService } from 'src/app/service/servicio.service';
import { TokenService } from 'src/app/service/token.service';
import { Genareser } from '../../models/genareser';
import { Servicio } from '../../models/servicio';

@Component({
  selector: 'app-lista-servicio',
  templateUrl: './lista-servicio.component.html',
  styleUrls: ['./lista-servicio.component.css']
})
export class ListaServicioComponent implements OnInit {

  servicios: Servicio[] = [];
  isAdmin = false;
  isSuperadmin = false;

  servicio!: Servicio;

  genaresers: Genareser[] = [];

  // page: number = 0;

  page_size: number = 5;
  page_number: number = 1;
  totalRecords!: number;

  search: string = '';
  search2: string = '';
  searchCancel: string = '';
  search3: string = '';
  search4: string = '';
  searchSolicitado: any = null;

  isCancel: boolean = true;

  constructor(private servicioService: ServicioService, private toastr: ToastrService, private tokenService: TokenService,
    private activatedRoute: ActivatedRoute, private router: Router, private genareserService: GenareserService) { }

  ngOnInit(): void {
    this.listaServicios();
    this.fechaActual();
    this.isAdmin = this.tokenService.isAdmin();
    this.isSuperadmin = this.tokenService.isSuperadmin();
  }

  listaServicios(): void {
    this.servicioService.lista().subscribe(
      (data: Servicio[]) => {
        this.servicios = data;
        this.totalRecords = data.length;

        // console.log(data[0].paciente?.id);
      },
      err => {
        console.log(err);
      }
    );
  }

  fechaActual(): void {
    const nowFecha = new Date();
    const day = ("0" + nowFecha.getDate()).slice(-2);
    const month = ("0" + (nowFecha.getMonth() + 1)).slice(-2);
    const today = nowFecha.getFullYear() + "-" + (month) + "-" + (day);
    (document.getElementById("search") as HTMLInputElement).value = today;
    this.search = today;
  }

  onSearchServicio(search: string) {
    //this.page = 0;
    this.search = search;
  }

  clearSearch(): void {
    this.search = '';
    (document.getElementById('search') as HTMLInputElement).value = '';
    this.listaServicios();
  }


  // --------------------------------------------------------------
  // Paginación (otro metodo)
  // sort(): void {
  //   this.asc = !this.asc;
  //   this.listaServicios();
  // }

  // rewind(): void {
  //   if (!this.isFirst) {
  //     this.page--;
  //     this.listaServicios();
  //   }
  // }

  // forward(): void {
  //   if (!this.isLast) {
  //     this.page++;
  //     this.listaServicios();
  //   }
  // }

  //  setPages(page: number): void {
  //    this.page = page;
  //    this.listaServicios();
  //  }

  // ----------- Modals -------------

  horaEjecucionServicio(): void {
    const nowHora = new Date();
    const hora = ("0" + nowHora.getHours()).slice(-2);
    const min = ("0" + nowHora.getMinutes()).slice(-2);
    const seg = ("0" + nowHora.getSeconds()).slice(-2);
    const horaEj = hora + ":" + min + ":" + seg;
    (document.getElementById("horaEjecucion") as HTMLInputElement).value = horaEj;
    this.servicio.horaEjecucion = hora + ":" + min + ":" + seg;
    this.servicio.horaFinalizacion = '00:00:00';
  }

  cambioHEj(txtHEj: string): void {
    this.servicio.horaEjecucion = (document.getElementById("horaEjecucion") as HTMLInputElement).value;
  }

  horaFinalizacionServicio(): void {
    const nowHora = new Date();
    const hora = ("0" + nowHora.getHours()).slice(-2);
    const min = ("0" + nowHora.getMinutes()).slice(-2);
    const seg = ("0" + nowHora.getSeconds()).slice(-2);
    const horaF = hora + ":" + min + ":" + seg;
    (document.getElementById("horaFinalizacion") as HTMLInputElement).value = horaF;
    this.servicio.horaFinalizacion = hora + ":" + min + ":" + seg;
  }

  cambioHF(txtHF: string): void {
    this.servicio.horaFinalizacion = (document.getElementById("horaFinalizacion") as HTMLInputElement).value;
  }

  onUpdateTime(servicio: Servicio): void {
    this.servicioService.updateTime(this.servicio).subscribe(
      data => {
        this.toastr.success('Hora guardada', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/camilleros/servicio/lista']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/camilleros/servicio/lista']);
      }
    );
  }

  tiempoTotal(): void {
    
    var hora1 = (this.servicio.horaEnvio).split(":");
    var hora4 = (this.servicio.horaFinalizacion).split(":");
    var t1 = new Date();
    var t4 = new Date();
    t1.setHours(Number(hora1[0]), Number(hora1[1]), Number(hora1[2]));
    t4.setHours(Number(hora4[0]), Number(hora4[1]), Number(hora4[2]));

    var m1 = 60 - (t1.getMinutes());
    var m4 = t4.getMinutes();
    var sumaM = m1 + m4;

    var h1 = 1 + (t1.getHours());
    var h4 = t4.getHours();

    var tt = "El tiempo total del servicio es de:" + "\n" +
      Math.abs(t1.getHours() - t4.getHours()) + " " + "horas" + "\n" +
      Math.abs(t1.getMinutes() - t4.getMinutes()) + " " + "minutos" + "\n" +
      Math.abs(t1.getSeconds() - t4.getSeconds()) + " " + "segundos"

    while (h1 != h4) {
      if((h4+24) == h1) {
        sumaM = sumaM;
        break;
      }
      if(h1 == 24 && h4 != 0) {
        sumaM = sumaM + (60 * h4);
        break;
      }

      sumaM = sumaM + 60;
      h1 = h1 + 1;
    }

    if(t1.getHours() == t4.getHours()) {
      sumaM = t4.getMinutes() - t1.getMinutes();
    }
    //var horaT = Math.floor(sumaM / 60);
    //var minutosT = sumaM - (horaT * 60);
    this.servicio.tiempoTotal = sumaM;
  }

  habilitar(): void {
    const cancel = (document.getElementById('cancelado') as HTMLInputElement).value;
    this.isCancel = false;
    this.servicio.cancelado = true;
    const mot = (document.getElementById('motivoCancelado') as HTMLInputElement).value;
    this.servicio.motivoCancelado = mot;
    //console.log(cancel);
  }

  noHabilitar(): void {
    const nocancel = (document.getElementById('noCancelado') as HTMLInputElement).value;
    this.isCancel = true;
    this.servicio.cancelado = false;
    (document.getElementById('motivoCancelado') as HTMLInputElement).value = '';
    this.servicio.motivoCancelado = '';
    this.servicio.horaCancelacion = '00:00:00';
  }

  horaCancelacionServicio(): void {
    const nowHora = new Date();
    const hora = ("0" + nowHora.getHours()).slice(-2);
    const min = ("0" + nowHora.getMinutes()).slice(-2);
    const seg = ("0" + nowHora.getSeconds()).slice(-2);
    const horaCancel = hora + ":" + min + ":" + seg;
    this.servicio.horaCancelacion = horaCancel;
  }

  onUpdateCancel(servicio: Servicio): void {
    this.servicioService.updateCancelado(this.servicio).subscribe(
      data => {
        this.toastr.success('Servicio actualizado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/camilleros/servicio/lista']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/camilleros/servicio/lista']);
      }
    );
  }

  printServicio(imprimir1: any) {
    let printContents = (document.getElementById(imprimir1) as InnerHTML).innerHTML;
    let originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;

    window.location.reload()
  }

  public onOpenModal(servicio: Servicio, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    if (mode === 'editTime') {
      this.servicio = servicio;
      button.setAttribute('data-bs-target', '#updateTimeModal');
    }
    if (mode === 'editCancel') {
      this.servicio = servicio;
      button.setAttribute('data-bs-target', '#updateCancelModal');
      if (this.servicio.cancelado == true) {
        this.isCancel = false;
      }
    }
    if (mode === 'print') {
      this.servicio = servicio;
      button.setAttribute('data-bs-target', '#imprimirModal');
    }
    container!.appendChild(button);
    button.click();
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServicioService } from 'src/app/service/servicio.service';
import { TokenService } from 'src/app/service/token.service';
import { Servicio } from '../../models/servicio';

@Component({
  selector: 'app-lista-servicio',
  templateUrl: './lista-servicio.component.html',
  styleUrls: ['./lista-servicio.component.css']
})
export class ListaServicioComponent implements OnInit {

  servicios: Servicio[] = [];
  roles!: string[];
  isAdmin = false;
  isSuperadmin = false;

  servicio!: Servicio;

  totalPages: Array<number> = [];

  page: number = 0;
  search: string = '';

  isCancel: boolean = true;  

  constructor(private servicioService: ServicioService, private toastr: ToastrService, private tokenService: TokenService,
    private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.listaServicios();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol == 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
      if (rol == 'ROLE_SUPERADMIN') {
        this.isSuperadmin = true;
      }
    });
  }

  listaServicios(): void {
    this.servicioService.lista().subscribe(
      (data: Servicio[]) => {
        this.servicios = data;
        // console.log(data[0].paciente?.id);
      },
      err => {
        console.log(err);
      }
    );
  }


  onSearchServicio(search: string) {
    this.page = 0;
    this.search = search;
  }

  borrar(id: number) {
    this.servicioService.delete(id).subscribe(
      data => {
        this.toastr.success('Servicio eliminado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.listaServicios();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
      }
    );
  }

  // --------------------------------------------------------------

  // Paginación

  nextPage() {
    this.page += 10;
  }

  prevPage() {
    if (this.page > 0) {
      this.page -= 10;
    }
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

  // setPages(page: number): void {
  //   this.page = page;
  //   this.listaServicios();
  // }

  // ----------- Registrar horas -------------

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

  horaFinalizacionServicio(): void {
    const nowHora = new Date();
    const hora = ("0" + nowHora.getHours()).slice(-2);
    const min = ("0" + nowHora.getMinutes()).slice(-2);
    const seg = ("0" + nowHora.getSeconds()).slice(-2);
    const horaF = hora + ":" + min + ":" + seg;
    (document.getElementById("horaFinalizacion") as HTMLInputElement).value = horaF;
    this.servicio.horaFinalizacion = hora + ":" + min + ":" + seg;
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

  habilitar(): void {
    const cancel = (document.getElementById('cancelado') as HTMLInputElement).value;
    this.isCancel = false;
    this.servicio.cancelado = true;
    const mot = (document.getElementById('motivoCancelado') as HTMLInputElement).value;
    this.servicio.motivoCancelado = mot;
    console.log(cancel);
  }

  noHabilitar(): void {
    const nocancel = (document.getElementById('noCancelado') as HTMLInputElement).value;
    this.isCancel = true;
    this.servicio.cancelado = false;
    (document.getElementById('motivoCancelado') as HTMLInputElement).value = '';
    this.servicio.motivoCancelado = '';
    console.log(nocancel);
  }
 
  onUpdateCancel(servicio: Servicio): void {
    this.servicioService.updateCancelado(this.servicio).subscribe(
      data => {
        this.toastr.success('Servicio cancelado', 'OK', {
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
      if(this.servicio.cancelado == true) {
        this.isCancel = false;
      }
    }
    container!.appendChild(button);
    button.click();
  }

}

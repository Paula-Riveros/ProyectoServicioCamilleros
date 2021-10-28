import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GenareserService } from 'src/app/service/genareser.service';
import { ServicioService } from 'src/app/service/servicio.service';
import { TokenService } from 'src/app/service/token.service';
import { Genareser } from '../../models/genareser';
import { Servicio } from '../../models/servicio';

@Component({
  selector: 'app-consulta-servicio',
  templateUrl: './consulta-servicio.component.html',
  styleUrls: ['./consulta-servicio.component.css']
})
export class ConsultaServicioComponent implements OnInit {

  servicios: Servicio[] = [];
  isAdmin = false;
  isSuperadmin = false;

  servicio!: Servicio;

  genaresers: Genareser[] = [];

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

  today = '';

  constructor(private servicioService: ServicioService, private toastr: ToastrService, private tokenService: TokenService,
    private activatedRoute: ActivatedRoute, private router: Router, private genareserService: GenareserService) { }

  ngOnInit(): void {
    this.fechaActual();
    this.listaServicios();
    this.isAdmin = this.tokenService.isAdmin();
    this.isSuperadmin = this.tokenService.isSuperadmin();
  }

  listaServicios(): void {
    this.servicioService.lista().subscribe(
      (data: Servicio[]) => {
        this.servicios = data;
        this.totalRecords = data.length;
        // this.promedio = this.servicios.reduce((acc, obj) =>
        //   acc + obj.tiempoTotal, 0);
        // console.log(this.promedio);
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
    this.today = today;
    this.search = today;
  }

  onSearchServicio(search: string) {
    //this.page = 0;
    this.search = search;
    this.listaServicios();
  }

  onSearchServicio2(search2: string) {
    this.search2 = search2;
    this.listaServicios();
  }

  onSearchServicio3(search3: string) {
    this.search3 = search3;
    this.listaServicios();
  }

  onSearchServicio4(search4: string) {
    this.search4 = search4;
    this.listaServicios();
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

  clearSearch(): void {
    this.search = '';
    (document.getElementById('search') as HTMLInputElement).value = '';
  }

  clearSearch2(): void {
    this.search2 = '';
    (document.getElementById('search2') as HTMLInputElement).value = '';
  }

  clearSearch3(): void {
    this.search3 = '';
    (document.getElementById('search3') as HTMLInputElement).value = '';
  }

  clearSearch4(): void {
    this.search4 = '';
    (document.getElementById('search4') as HTMLInputElement).value = '';
  }

  clear(): void {
    this.search = this.today;
    (document.getElementById('search') as HTMLInputElement).value = this.today;
    this.search2 = '';
    (document.getElementById('search2') as HTMLInputElement).value = '';
    this.searchCancel = '';
    this.search3 = '';
    (document.getElementById('search3') as HTMLInputElement).value = '';
    this.search4 = '';
    (document.getElementById('search4') as HTMLInputElement).value = '';
    this.searchSolicitado = null;
  }

  // --------------------------------------------------------------

  // Paginación

  // nextPage() {
  //   this.page += 20;
  // }

  // prevPage() {
  //   if (this.page > 0) {
  //     this.page -= 20;
  //   }
  // }


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

  // ----------- Modals -------------

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
    if (mode === 'print') {
      this.servicio = servicio;
      button.setAttribute('data-bs-target', '#imprimirModal');
    }
    container!.appendChild(button);
    button.click();
  }

  volver(): void {
    this.router.navigate(['/camilleros/inicio']);
  }

}

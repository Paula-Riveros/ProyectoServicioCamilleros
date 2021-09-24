import { Component, OnInit } from '@angular/core';
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

  totalPages: Array<number> = [];

  page: number = 0;
  search: string = '';

  // Paginación (otro metodo)
  // page = 0;
  // size = 15;
  // order = 'id';
  // asc = true;

  // isFirst = false;
  // isLast = false;

  constructor(private servicioService: ServicioService, private toastr: ToastrService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.listaServicios();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol == 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

  listaServicios(): void {
    this.servicioService.lista().subscribe(
      data => {
        this.servicios = data;
        // console.log(data[0].paciente?.id);
      },
      err => {
        console.log(err);
      }
    );
  }

  // listaServicios(): void {
  //   this.servicioService.lista(this.page, this.size, this.order, this.asc).subscribe(
  //     data => {
  //       this.servicios = data.content;
  //       this.isFirst = data.first;
  //       this.isLast = data.last;
  //       this.totalPages = new Array(data['totalPages']);
  //       // console.log(data[0].paciente?.id);
  //     },
  //     err => {
  //       console.log(err);
  //     }
  //   );
  // }

  // listaServiciosFecha(key: string): void {
  //   console.log(key);
  //   const results: Servicio[] = [];
  //   for (const servicio of this.servicios) {
  //     if (servicio.fecha.indexOf(key) !== -1) {
  //       results.push(servicio);
  //     }
  //   }
  //   this.servicios = results;
  //   if (results.length === 0 || !key) {
  //     this.listaServicios();
  //   }
  // }

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
    this.page += 5;
  }

  prevPage() {
    if(this.page > 0) {
      this.page -= 5;
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

}

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

  constructor(private servicioService: ServicioService, private toastr: ToastrService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.listaServicios();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach( rol => {
      if(rol =='ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

  listaServicios(): void {
    this.servicioService.lista().subscribe(
      data => {
        console.log(data[0].paciente?.id);
        this.servicios = data;
      }, 
      err => {
        console.log(err);
      }
    );
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

}

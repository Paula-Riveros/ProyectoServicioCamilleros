import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CamilleroService } from 'src/app/service/camillero.service';
import { ServicioService } from 'src/app/service/servicio.service';
import { Camillero } from '../../models/camillero';
import { Servicio } from '../../models/servicio';

@Component({
  selector: 'app-editar-servicio',
  templateUrl: './editar-servicio.component.html',
  styleUrls: ['./editar-servicio.component.css']
})
export class EditarServicioComponent implements OnInit {

  servicio!: Servicio;
  camilleros: Camillero[] = [];

  constructor(private servicioService: ServicioService, private activatedRoute: ActivatedRoute, 
    private toastr: ToastrService, private router: Router, private camilleroService: CamilleroService) { }

  ngOnInit() {
    this.listaCamilleros();
    const id = this.activatedRoute.snapshot.params.id;
    this.servicioService.detail(id).subscribe(
      data => {
        this.servicio = data;
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/camilleros/servicio/lista']);
      }
    );
  }


  horaAsignacionServicio(): void {
    const nowHora = new Date();
    const hora = ("0" + nowHora.getHours()).slice(-2);
    const min = ("0" + nowHora.getMinutes()).slice(-2);
    const seg = ("0" + nowHora.getSeconds()).slice(-2);
    this.servicio.horaAsignacion = hora + ":" + min + ":" + seg;
    this.servicio.horaEjecucion = '00:00:00';
    this.servicio.horaFinalizacion = '00:00:00';
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.servicioService.update(id, this.servicio).subscribe(
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

  listaCamilleros(): void {
    this.camilleroService.lista().subscribe(
      data => {
        // this.camilleros = data;
        this.camilleros = data.filter( camillero => camillero.estadoCamillero == true);
      }, 
      err => {
        console.log(err);
      }
    );
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { ServicioService } from 'src/app/service/servicio.service';
import { Servicio } from '../../models/servicio';

@Component({
  selector: 'app-detalle-servicio',
  templateUrl: './detalle-servicio.component.html',
  styleUrls: ['./detalle-servicio.component.css']
})
export class DetalleServicioComponent implements OnInit {

  servicio?: Servicio;
  tiempoT: string = '';

  constructor(private servicioService: ServicioService, private activatedRoute: ActivatedRoute,
    private toastr: ToastrService, private router: Router) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    this.servicioService.detail(id).subscribe(
      data => {
        this.servicio = data;
        this.tiempoTotal();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.volver();
      }
    );
  }

  tiempoTotal(): void {
    if (this.servicio?.horaFinalizacion != "00:00:00") {
      var hora1 = (this.servicio!.horaEnvio).split(":");
      var hora4 = (this.servicio!.horaFinalizacion).split(":");
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
        sumaM = sumaM + 60;
        h1 = h1 + 1;
      }
      var horaT = Math.floor(sumaM / 60);
      var minutosT = sumaM - (horaT * 60);
      this.tiempoT = "El tiempo total del servicio es de: " + (horaT ? horaT + (horaT > 1 ? " horas y " : " hora y ") : "") + minutosT + " minutos";
      console.log(this.tiempoT);
    }

    
  }

  volver(): void {
    this.router.navigate(['/camilleros/servicio/lista']);
  }


}

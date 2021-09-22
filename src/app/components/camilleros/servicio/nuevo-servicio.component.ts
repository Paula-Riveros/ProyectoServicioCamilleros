import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PacienteService } from 'src/app/service/paciente.service';
import { ServicioService } from 'src/app/service/servicio.service';
import { Servicio } from '../../models/servicio';

@Component({
  selector: 'app-nuevo-servicio',
  templateUrl: './nuevo-servicio.component.html',
  styleUrls: ['./nuevo-servicio.component.css']
})
export class NuevoServicioComponent implements OnInit {

  id!: number;
  fecha = '';
  servicioSolicitado: string = '';
  destinoServicio: string = '';
  solicitante: string = '';
  transporte: string = '';
  insumo: string = '';
  familiar: string = '';
  aislamiento: string = '';
  observaciones: string = '';
  idPaciente!: number;
  nombrePaciente: string = '';

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;


  constructor(private servicioService: ServicioService, private pacienteService: PacienteService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const servicio = new Servicio(this.id, this.fecha, this.servicioSolicitado, this.destinoServicio, this.solicitante, this.transporte,
      this.insumo, this.familiar, this.aislamiento, this.observaciones, this.idPaciente, this.nombrePaciente);
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

  buscar() {
    let valor: string = this.txtBuscar.nativeElement.value;

    //Si es vacía la cadena recibida, finalizar la función
    if (valor.trim().length==0) {return;}
    // console.log(valor);
    this.pacienteService.detail(parseInt(valor)).subscribe(
      data => {
        this.nombrePaciente = data.nombre;
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

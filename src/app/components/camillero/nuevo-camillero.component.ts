import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CamilleroService } from 'src/app/service/camillero.service';
import { Camillero } from '../models/camillero';

@Component({
  selector: 'app-nuevo-camillero',
  templateUrl: './nuevo-camillero.component.html',
  styleUrls: ['./nuevo-camillero.component.css']
})
export class NuevoCamilleroComponent implements OnInit {

  idCamillero!: number;
  nombreCamillero: string = '';
  emailCamillero: string = '';
  estadoCamillero: boolean = true;

  constructor(private camilleroService: CamilleroService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const camillero = new Camillero(this.idCamillero, this.nombreCamillero, this.emailCamillero, this.estadoCamillero);
    this.camilleroService.save(camillero).subscribe(
      data => {
        this.toastr.success('Camillero guardado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/camilleros/camillero/lista']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        // this.router.navigate(['/camilleros/camillero/lista']);
      }
    );
  }

}

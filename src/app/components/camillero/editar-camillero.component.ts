import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CamilleroService } from 'src/app/service/camillero.service';
import { Camillero } from '../models/camillero';

@Component({
  selector: 'app-editar-camillero',
  templateUrl: './editar-camillero.component.html',
  styleUrls: ['./editar-camillero.component.css']
})
export class EditarCamilleroComponent implements OnInit {

  camillero!: Camillero;

  constructor(private camilleroService: CamilleroService, private activatedRoute: ActivatedRoute, 
    private toastr: ToastrService, private router: Router) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    this.camilleroService.detail(id).subscribe(
      data => {
        this.camillero = data;
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/camilleros/camillero/lista']);
      }
    );
  }

  // Editar camillero
  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.camilleroService.update(id, this.camillero).subscribe(
      data => {
        this.toastr.success('Camillero actualizado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/camilleros/camillero/lista']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/camilleros/camillero/lista']);
      }
    );
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CamilleroService } from 'src/app/service/camillero.service';
import { Camillero } from '../models/camillero';

@Component({
  selector: 'app-detalle-camillero',
  templateUrl: './detalle-camillero.component.html',
  styleUrls: ['./detalle-camillero.component.css']
})
export class DetalleCamilleroComponent implements OnInit {

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
        this.volver();
      }
    );
  }

  volver(): void {
    this.router.navigate(['/camilleros/camillero/lista']);
  }

}

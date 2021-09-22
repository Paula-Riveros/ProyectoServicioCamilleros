import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GenpacienService } from 'src/app/service/genpacien.service';
import { Genpacien } from '../models/genpacien';

@Component({
  selector: 'app-detalle-genpacien',
  templateUrl: './detalle-genpacien.component.html',
  styleUrls: ['./detalle-genpacien.component.css']
})
export class DetalleGenpacienComponent implements OnInit {

  genpacien!: Genpacien;

  constructor(private genpacienService: GenpacienService, private activatedRoute: ActivatedRoute, 
    private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.genpacienService.detail(id).subscribe(
      data => {
        this.genpacien = data;
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
    this.router.navigate(['/camilleros/genpacien/lista']);
  }

}

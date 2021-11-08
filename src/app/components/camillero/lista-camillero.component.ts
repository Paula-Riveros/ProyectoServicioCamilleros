import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CamilleroService } from 'src/app/service/camillero.service';
import { TokenService } from 'src/app/service/token.service';
import { Camillero } from '../models/camillero';

@Component({
  selector: 'app-lista-camillero',
  templateUrl: './lista-camillero.component.html',
  styleUrls: ['./lista-camillero.component.css']
})
export class ListaCamilleroComponent implements OnInit {

  camilleros: Camillero[] = [];
  isAdmin = false;
  isSuperadmin = false;

  constructor(private camilleroService: CamilleroService, private toastr: ToastrService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.listaCamilleros();
    this.isAdmin = this.tokenService.isAdmin();
    this.isSuperadmin = this.tokenService.isSuperadmin();
  }

  listaCamilleros(): void {
    this.camilleroService.lista().subscribe(
      data => {
        this.camilleros = data;
      }, 
      err => {
        console.log(err);
      }
    );
  }

  borrar(idCamillero: number) {
     this.camilleroService.delete(idCamillero).subscribe(
     data => {
       this.toastr.success('Camillero eliminado', 'OK', {
         timeOut: 3000, positionClass: 'toast-top-center'
       });
       this.listaCamilleros();
     },
     err => {
       this.toastr.error(err.error.mensaje, 'Fail', {
         timeOut: 3000, positionClass: 'toast-top-center'
       });
     }
   );
   }

}

import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { GenpacienService } from 'src/app/service/genpacien.service';
import { TokenService } from 'src/app/service/token.service';
import { Genpacien } from '../models/genpacien';

@Component({
  selector: 'app-lista-genpacien',
  templateUrl: './lista-genpacien.component.html',
  styleUrls: ['./lista-genpacien.component.css']
})
export class ListaGenpacienComponent implements OnInit {

  genpacientes: Genpacien[] = [];
  isAdmin = false;
  isSuperadmin = false;

  constructor(private genpacienService: GenpacienService, private toastr: ToastrService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.listaPacientes();
    this.isAdmin = this.tokenService.isAdmin();
    this.isSuperadmin = this.tokenService.isSuperadmin();
  }

  listaPacientes(): void {
    this.genpacienService.lista().subscribe(
      data => {
        this.genpacientes = data;
      }, 
      err => {
        console.log(err);
      }
    );
  }

}

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
  roles!: string[];
  isAdmin = false;

  constructor(private genpacienService: GenpacienService, private toastr: ToastrService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.listaPacientes();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach( rol => {
      if(rol =='ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
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

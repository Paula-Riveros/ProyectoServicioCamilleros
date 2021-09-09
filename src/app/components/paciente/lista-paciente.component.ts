import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PacienteService } from 'src/app/service/paciente.service';
import { TokenService } from 'src/app/service/token.service';
import { Paciente } from '../models/paciente';

@Component({
  selector: 'app-lista-paciente',
  templateUrl: './lista-paciente.component.html',
  styleUrls: ['./lista-paciente.component.css']
})
export class ListaPacienteComponent implements OnInit {

  pacientes: Paciente[] = [];
  roles!: string[];
  isAdmin = false;

  constructor(private pacienteService: PacienteService, private toastr: ToastrService, private tokenService: TokenService) { }

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
    this.pacienteService.lista().subscribe(
      data => {
        this.pacientes = data;
      }, 
      err => {
        console.log(err);
      }
    );
  }

  borrar(id: number) {
    this.pacienteService.delete(id).subscribe(
    data => {
      this.toastr.success('Paciente eliminado', 'OK', {
        timeOut: 3000, positionClass: 'toast-top-center'
      });
      this.listaPacientes();
    },
    err => {
      this.toastr.error(err.error.mensaje, 'Fail', {
        timeOut: 3000, positionClass: 'toast-top-center'
      });
    }
  );
  }

}

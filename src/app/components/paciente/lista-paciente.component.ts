import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PacienteService } from 'src/app/service/paciente.service';
import { Paciente } from '../models/paciente';

@Component({
  selector: 'app-lista-paciente',
  templateUrl: './lista-paciente.component.html',
  styleUrls: ['./lista-paciente.component.css']
})
export class ListaPacienteComponent implements OnInit {

  pacientes: Paciente[] = [];

  constructor(private pacienteService: PacienteService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.listaPacientes();
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

import { Component, OnInit } from '@angular/core';
import { PacienteService } from 'src/app/service/paciente.service';
import { Paciente } from '../models/paciente';

@Component({
  selector: 'app-lista-paciente',
  templateUrl: './lista-paciente.component.html',
  styleUrls: ['./lista-paciente.component.css']
})
export class ListaPacienteComponent implements OnInit {

  paciente: Paciente[] = [];

  constructor(private pacienteService: PacienteService) { }

  ngOnInit(): void {
    this.listaPacientes();
  }

  listaPacientes(): void {
    this.pacienteService.lista().subscribe(
      data => {
        this.paciente = data;
      }, 
      err => {
        console.log(err);
      }
    );
  }

}

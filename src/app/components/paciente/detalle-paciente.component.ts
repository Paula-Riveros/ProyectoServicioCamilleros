import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PacienteService } from 'src/app/service/paciente.service';
import { Paciente } from '../models/paciente';

@Component({
  selector: 'app-detalle-paciente',
  templateUrl: './detalle-paciente.component.html',
  styleUrls: ['./detalle-paciente.component.css']
})
export class DetallePacienteComponent implements OnInit {

  paciente!: Paciente;

  constructor(private pacienteService: PacienteService, private activatedRoute: ActivatedRoute, 
    private toastr: ToastrService, private router: Router) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    this.pacienteService.detail(id).subscribe(
      data => {
        this.paciente = data;
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
    this.router.navigate(['/camilleros/paciente/lista']);
  }

}

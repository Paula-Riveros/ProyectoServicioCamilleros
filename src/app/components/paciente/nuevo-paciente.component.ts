// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
// import { PacienteService } from 'src/app/service/paciente.service';
// import { Paciente } from '../models/paciente';

// @Component({
//   selector: 'app-nuevo-paciente',
//   templateUrl: './nuevo-paciente.component.html',
//   styleUrls: ['./nuevo-paciente.component.css']
// })
// export class NuevoPacienteComponent implements OnInit {

//   id: number = 0;
//   nombre: string = '';
//   edad: number = 0;
//   direccion: string = '';
//   telefono: number = 0;


//   constructor(private pacienteService: PacienteService, private toastr: ToastrService, private router: Router) { }

//   ngOnInit(): void {
//   }

//   onCreate(): void {
//     const paciente = new Paciente(this.id, this.nombre, this.edad, this.direccion, this.telefono);
//     this.pacienteService.save(paciente).subscribe(
//       data => {
//         this.toastr.success('Paciente guardado', 'OK', {
//           timeOut: 3000, positionClass: 'toast-top-center'
//         });
//         this.router.navigate(['/camilleros/paciente/lista']);
//       },
//       err => {
//         this.toastr.error(err.error.mensaje, 'Fail', {
//           timeOut: 3000, positionClass: 'toast-top-center'
//         });
//         // this.router.navigate(['/camilleros/paciente/lista']);
//       }
//     );
//   }

// }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';
import { NuevoUsuario } from '../models/nuevo-usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  isLogged = false;
  nuevoUsuario!: NuevoUsuario;
  nombre: string = '';
  nombreUsuario!: string;
  email: string = '';
  password!: string;
  errMsj: string = '';
  

  constructor(private tokenService: TokenService, private authService: AuthService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    }

  }

  // Registrarse
  onRegister(): void {
    this.nuevoUsuario = new NuevoUsuario(this.nombre, this.nombreUsuario, this.email, this.password);
    this.authService.nuevo(this.nuevoUsuario).subscribe(
      data => {
        this.toastr.success('Cuenta Creada', 'OK', {
        timeOut: 3000, positionClass: 'toast-top-center'
        });

        this.router.navigate(['/login']);

        },
        err => {
        this.errMsj = err.error.mensaje;
        this.toastr.error(this.errMsj, 'Error al crear la cuenta', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        // console.log(err.error.message);
      }
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';
import { LoginUsuario } from '../models/login-usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // isLogged = false;
  // isLoginFail = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!: string;
  // roles: string[] = [];

  errMsj: string = '';

  constructor(private tokenService: TokenService, private authService: AuthService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    // if (this.tokenService.getToken()) {

    //   this.isLogged = true;
    //   this.isLoginFail = false;
    //   this.roles = this.tokenService.getAuthorities();
    // }
   
  }

  // Iniciar Sesion
  onLogin(): void {
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    this.authService.login(this.loginUsuario).subscribe(
      data => {

        // if (data.cambioClave === 0 && data.nombreUsuario != 'user') {
        //   this.router.navigate(['/nuevo-login']);
        //   this.isLogged = true;
        //   this.isLoginFail = false;
        //   this.tokenService.setToken(data.token);
        //   this.tokenService.setUsername(data.nombreUsuario);
        //   this.tokenService.setAuthorities(data.authorities);
        //   this.roles = data.authorities;
        // }

        // if (data.cambioClave === 1 || data.nombreUsuario === 'user') {
        //   this.isLogged = true;
        //   this.isLoginFail = false;
        //   this.tokenService.setToken(data.token);
        //   this.tokenService.setUsername(data.nombreUsuario);
        //   this.tokenService.setAuthorities(data.authorities);
        //   this.roles = data.authorities;
        //   this.router.navigate(['/camilleros/inicio']);
        // }

        // const tokenprueba = sessionStorage.getItem('AuthToken');
        // const xd = this.tokenService.getToken();
        // console.log(data);

        this.tokenService.setToken(data.token);
        this.router.navigate(['/camilleros/inicio']);
      },
      err => {
        this.errMsj = err.error.mensaje;
        this.toastr.error(this.errMsj, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        console.log(err.error.message);
      }
    );
  }

}

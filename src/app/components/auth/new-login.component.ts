// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
// import { AuthService } from 'src/app/service/auth.service';
// import { TokenService } from 'src/app/service/token.service';
// import { LoginUsuario } from '../models/login-usuario';
// import Swal from 'sweetalert2';

// @Component({
//   selector: 'app-new-login',
//   templateUrl: './new-login.component.html',
//   styleUrls: ['./new-login.component.css']
// })
// export class NewLoginComponent implements OnInit {

//   isLogged = false;
//   isLoginFail = false;
//   loginUsuario!: LoginUsuario;
//   usuario!: string;
//   clave!: string;
//   oldClave!: string;
//   roles: string[] = [];
//   errMsj!: string;

//   constructor(private tokenService: TokenService, private authService: AuthService, private router: Router, private toastr: ToastrService) { }

//   ngOnInit(): void {
//     console.log(this.tokenService.getToken());
//     if (this.tokenService.getToken()) {
//       this.isLogged = true;
//       this.isLoginFail = false;
//       //this.roles = this.tokenService.getAuthorities();
//     }
//   }

//   nuevaContrasenaLogin(usuario: string, clave: string, oldClave: string) {
//     this.authService.cambiarClave(oldClave, clave, usuario).subscribe(
//       resp => {

//         console.log(resp);

//         //if (resp['mensaje'] === "Cambio de contraseña exitoso") {
//           Swal.fire({
//             title: 'Cambio exitoso 1',

//             icon: 'success',

//             confirmButtonColor: '#264285',
//             confirmButtonText: 'Aceptar'
//           })
//           this.router.navigate(['/camilleros/inicio']);

//        // }
//       }
//     )

//     Swal.fire({
//       title: 'Cambio exitoso 2',

//       icon: 'success',

//       confirmButtonColor: '#264285',
//       confirmButtonText: 'Aceptar'
//     })
//     this.router.navigateByUrl("/camilleros/inicio");
//   }

//   onLogin(): void {

//     this.loginUsuario = new LoginUsuario(this.usuario, this.clave);
//     console.log("funciono");
//     /* this.router.navigateByUrl("/camas/inicio") */
//     this.authService.login(this.loginUsuario).subscribe(
//       data => {

//         this.isLogged = true;
//         this.isLoginFail = false;
//         this.tokenService.setToken(data.token);
//         this.tokenService.setUsername(data.nombreUsuario);
//         this.tokenService.setAuthorities(data.authorities);
//         this.router.navigateByUrl("/camilleros/inicio")


//       },
//       err => {
//         Swal.fire({
//           title: 'DATOS INCORRECTOS',
//           text: 'Por favor escriba correcto los datos',
//           icon: 'error',

//           confirmButtonColor: '#264285',
//           confirmButtonText: 'Aceptar'
//         })
//       }
//     );
//   }

// }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JwtDTO } from '../components/models/jwt-dto';
import { LoginUsuario } from '../components/models/login-usuario';
import { NuevoUsuario } from '../components/models/nuevo-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL = environment.authURL;

  constructor(private httpClient: HttpClient) { }

  // Crear un nuevo usuario
  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any> {
    return this.httpClient.post<any>(this.authURL + 'nuevo', nuevoUsuario);
  }

  // Ingresar
  public login(loginUsuario: LoginUsuario): Observable<JwtDTO> {
    return this.httpClient.post<JwtDTO>(this.authURL + 'login', loginUsuario);
  }

  // Refrescar ingreso
  public refresh(dto: JwtDTO): Observable<JwtDTO> {
    return this.httpClient.post<JwtDTO>(this.authURL + 'refresh', dto);
  }

  public cambiarClave(oldPassword: string, newPassword: string, usuario: string) {
    return this.httpClient.put(this.authURL + `usuario/cambiar-clave/old=${oldPassword}/new=${newPassword}`, null);
  }

}

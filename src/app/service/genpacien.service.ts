import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Genpacien } from '../components/models/genpacien';

// Este es el service de la clase de los Pacientes (GENPACIEN)

@Injectable({
  providedIn: 'root'
})
export class GenpacienService {

  genpacienURL = environment.genpacienURL;

  constructor(private httpClient: HttpClient) { }

  // Listar todos los pacientes
  public lista(): Observable<Genpacien[]> {
    return this.httpClient.get<Genpacien[]>(this.genpacienURL + 'lista');
  }

  // Ver en detalle un paciente por id
  public detail(id: number): Observable<Genpacien> {
    return this.httpClient.get<Genpacien>(this.genpacienURL + `detail/${id}`);
  }

  // Ver en detalle un paciente por numero de documento
  public detailPacnumdoc(pacnumdoc: string): Observable<Genpacien> {
    return this.httpClient.get<Genpacien>(this.genpacienURL + `detail/pacnumdoc/${pacnumdoc}`);
  }
}

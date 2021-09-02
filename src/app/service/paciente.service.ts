import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paciente } from '../components/models/paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  pacienteURL = 'http://localhost:8080/paciente/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Paciente[]> {
    return this.httpClient.get<Paciente[]>(this.pacienteURL + 'lista');
  }

  public detail(id: number): Observable<Paciente> {
    return this.httpClient.get<Paciente>(this.pacienteURL + `detail/${id}`);
  }

  public save(paciente: Paciente): Observable<any> {
    return this.httpClient.post<any>(this.pacienteURL + 'create', paciente); 
    // En caso de utilizar un metodo POST y no envie ningun RequestBody 
    // entonces se pondria {} en lugar de paciente, en el ultimo parametro.
  }

  public update(id: number, paciente: Paciente): Observable<any> {
    return this.httpClient.put<any>(this.pacienteURL + `update/${id}`, paciente); 
  }  

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.pacienteURL + `delete/${id}`);
  }

}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Servicio } from '../components/models/servicio';


@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  //servicioURL = 'http://localhost:1433/servicio/';

  servicioURL = environment.servicioURL;

  constructor(private httpClient: HttpClient) { }

  // Listar los servicios
  public lista(): Observable<Servicio[]> {
    return this.httpClient.get<Servicio[]>(`${this.servicioURL}lista`);
  }

  // Ver en detalle cada servicio
  public detail(id: number): Observable<Servicio> {
    return this.httpClient.get<Servicio>(this.servicioURL + `detail/${id}`);
  }

  // Crear un servicio
  public save(servicio: Servicio): Observable<any> {
    return this.httpClient.post<any>(this.servicioURL + 'create', servicio); 
    // En caso de utilizar un metodo POST y no envie ningun RequestBody 
    // entonces se pondria {} en lugar de paciente, en el ultimo parametro.
  }

  // Actualizar un servicio
  public update(id: number, servicio: Servicio): Observable<any> {
    return this.httpClient.put<any>(this.servicioURL + `update/${id}`, servicio); 
  }

  // Actualizar horas de los servicios
  public updateTime(servicio: Servicio): Observable<Servicio> {
    return this.httpClient.put<Servicio>(`${this.servicioURL}updatetime`, servicio); 
  }

  // Actualizar estado del servicio
  public updateCancelado(servicio: Servicio): Observable<Servicio> {
    return this.httpClient.put<Servicio>(this.servicioURL + 'updatecancelado', servicio); 
  }

  // Borrar servicio
  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.servicioURL + `delete/${id}`);
  }

  
}

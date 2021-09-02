import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Servicio } from './servicio';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

 /*  public getServicios(): Observable<Servicio[]> {
    return this.http.get<Servicio[]>(`${this.apiServerUrl}/servicio/all`);
  }

  public addServicio(servicio: Servicio): Observable<Servicio> {
    return this.http.post<Servicio>(`${this.apiServerUrl}/servicio/all`, servicio);
  } */

  
}

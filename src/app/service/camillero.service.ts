import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Camillero } from '../components/models/camillero';

@Injectable({
  providedIn: 'root'
})
export class CamilleroService {

  camilleroURL = 'http://localhost:1433/camillero/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Camillero[]> {
    return this.httpClient.get<Camillero[]>(this.camilleroURL + 'lista');
  }

  public detail(id: number): Observable<Camillero> {
    return this.httpClient.get<Camillero>(this.camilleroURL + `detail/${id}`);
  }

  public save(camillero: Camillero): Observable<any> {
    return this.httpClient.post<any>(this.camilleroURL + 'create', camillero); 
    // En caso de utilizar un metodo POST y no envie ningun RequestBody 
    // entonces se pondria {} en lugar de paciente, en el ultimo parametro.
  }

  public update(id: number, camillero: Camillero): Observable<any> {
    return this.httpClient.put<any>(this.camilleroURL + `update/${id}`, camillero); 
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.camilleroURL + `delete/${id}`);
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Camillero } from '../components/models/camillero';

@Injectable({
  providedIn: 'root'
})
export class CamilleroService {

  //camilleroURL = 'http://localhost:1433/camillero/';

  camilleroURL = environment.camilleroURL;

  constructor(private httpClient: HttpClient) { }

  // Listar todos los camilleros
  public lista(): Observable<Camillero[]> {
    return this.httpClient.get<Camillero[]>(this.camilleroURL + 'lista');
  }

  // Ver en detalle algun camillero
  public detail(id: number): Observable<Camillero> {
    return this.httpClient.get<Camillero>(this.camilleroURL + `detail/${id}`);
  }

  // Crear un camillero
  public save(camillero: Camillero): Observable<any> {
    return this.httpClient.post<any>(this.camilleroURL + 'create', camillero); 
    // En caso de utilizar un metodo POST y no envie ningun RequestBody 
    // entonces se pondria {} en lugar de paciente, en el ultimo parametro.
  }

  // Editar informacion de algun camillero
  public update(id: number, camillero: Camillero): Observable<any> {
    return this.httpClient.put<any>(this.camilleroURL + `update/${id}`, camillero); 
  }

  // Eliminar camillero
   public delete(id: number): Observable<any> {
     return this.httpClient.delete<any>(this.camilleroURL + `delete/${id}`);
   }

}

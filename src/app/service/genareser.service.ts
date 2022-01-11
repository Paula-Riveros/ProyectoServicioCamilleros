import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Genareser } from '../components/models/genareser';

// Este es el service de la clase que contiene las areas de hospital (GENARESER)

@Injectable({
  providedIn: 'root'
})
export class GenareserService {

  genareserURL = environment.genareserURL;

  constructor(private httpClient: HttpClient) { }

  // Listar todas las areas
  public lista(): Observable<Genareser[]> {
    return this.httpClient.get<Genareser[]>(this.genareserURL + 'lista');
  }

  // Obtener o ver en detalle un área
  public detail(id: number): Observable<Genareser> {
    return this.httpClient.get<Genareser>(this.genareserURL + `detail/${id}`);
  }
}

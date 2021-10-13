import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Genareser } from '../components/models/genareser';

@Injectable({
  providedIn: 'root'
})
export class GenareserService {

  genareserURL = 'http://localhost:1433/genareser/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Genareser[]> {
    return this.httpClient.get<Genareser[]>(this.genareserURL + 'lista');
  }

  public detail(id: number): Observable<Genareser> {
    return this.httpClient.get<Genareser>(this.genareserURL + `detail/${id}`);
  }
}

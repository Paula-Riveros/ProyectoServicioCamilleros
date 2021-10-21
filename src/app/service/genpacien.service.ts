import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Genpacien } from '../components/models/genpacien';

@Injectable({
  providedIn: 'root'
})
export class GenpacienService {

  // genpacienURL = 'http://localhost:1433/genpacien/';

  genpacienURL = 'http://localhost:8080/genpacien/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Genpacien[]> {
    return this.httpClient.get<Genpacien[]>(this.genpacienURL + 'lista');
  }

  public detail(id: number): Observable<Genpacien> {
    return this.httpClient.get<Genpacien>(this.genpacienURL + `detail/${id}`);
  }

  public detailPacnumdoc(pacnumdoc: string): Observable<Genpacien> {
    return this.httpClient.get<Genpacien>(this.genpacienURL + `detail/pacnumdoc/${pacnumdoc}`);
  }
}

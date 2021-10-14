import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServicioService } from './service/servicio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

 // public servicios: Servicio[] = [];

  constructor(private servicioService: ServicioService) { }

  ngOnInit() {
    
  }



  title = 'Servicio Camilleros';
}

import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-camilleros',
  templateUrl: './camilleros.component.html',
  styleUrls: ['./camilleros.component.css']
})
export class CamillerosComponent implements OnInit {

  nombreUsuario: string = '';

  constructor(private tokenService: TokenService) { }

  ngOnInit() {
    this.nombreUsuario = this.tokenService.getUserName();
  }

}

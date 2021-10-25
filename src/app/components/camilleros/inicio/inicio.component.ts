import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioCamillerosComponent implements OnInit {

  isAdmin = false;
  isSuperadmin = false;
  
  constructor(private router: Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.isAdmin = this.tokenService.isAdmin();
    this.isSuperadmin = this.tokenService.isSuperadmin();
  }


}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioCamillerosComponent implements OnInit {

  roles!: string[];
  isAdmin = false;
  
  constructor(private router: Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach( rol => {
      if(rol =='ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }


}

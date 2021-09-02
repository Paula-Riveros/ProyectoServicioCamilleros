import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ListaPacienteComponent } from './components/paciente/lista-paciente.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent, children:[
    { path: 'home', component: HomeComponent},
    { path: 'quienes-somos', component: QuienesSomosComponent},
  ]},

  { path: 'paciente/lista', component: ListaPacienteComponent },
  { path: 'paciente/detalle/:id', component: ListaPacienteComponent },
  { path: 'paciente/nuevo', component: ListaPacienteComponent },
  { path: 'paciente/editar/:id', component: ListaPacienteComponent },
     
    { path: '**', redirectTo: 'inicio/home' },
    { path: '', pathMatch: 'full', redirectTo: 'inicio/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

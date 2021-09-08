import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login.component';
import { RegistroComponent } from './components/auth/registro.component';
import { CamillerosComponent } from './components/camilleros/camilleros/camilleros.component';
import { InicioCamillerosComponent } from './components/camilleros/inicio/inicio.component';
import { HomeComponent } from './components/home/home.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { DetallePacienteComponent } from './components/paciente/detalle-paciente.component';
import { EditarPacienteComponent } from './components/paciente/editar-paciente.component';
import { ListaPacienteComponent } from './components/paciente/lista-paciente.component';
import { NuevoPacienteComponent } from './components/paciente/nuevo-paciente.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

const routes: Routes = [
   { path: 'inicio', component: InicioComponent, children:[
    { path: 'home', component: HomeComponent},
    { path: 'quienes-somos', component: QuienesSomosComponent},
  ]},

  { path: 'login', component: LoginComponent},
  { path: 'registro', component: RegistroComponent},

  { path: 'camilleros', component: CamillerosComponent,  children:[
    { path: 'inicio', component: InicioCamillerosComponent },
    { path: 'paciente/lista', component: ListaPacienteComponent },
    { path: 'paciente/detalle/:id', component: DetallePacienteComponent },
    { path: 'paciente/nuevo', component: NuevoPacienteComponent },
    { path: 'paciente/editar/:id', component: EditarPacienteComponent } 
  ]},
 
     
    { path: '**', redirectTo: 'inicio/home' },
    { path: '', pathMatch: 'full', redirectTo: 'inicio/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

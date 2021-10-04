import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login.component';
import { RegistroComponent } from './components/auth/registro.component';
import { DetalleCamilleroComponent } from './components/camillero/detalle-camillero.component';
import { EditarCamilleroComponent } from './components/camillero/editar-camillero.component';
import { ListaCamilleroComponent } from './components/camillero/lista-camillero.component';
import { NuevoCamilleroComponent } from './components/camillero/nuevo-camillero.component';
import { CamillerosComponent } from './components/camilleros/camilleros/camilleros.component';
import { InicioCamillerosComponent } from './components/camilleros/inicio/inicio.component';
import { DetalleServicioComponent } from './components/camilleros/servicio/detalle-servicio.component';
import { EditarServicioComponent } from './components/camilleros/servicio/editar-servicio.component';
import { ListaServicioComponent } from './components/camilleros/servicio/lista-servicio.component';
import { NuevoServicioComponent } from './components/camilleros/servicio/nuevo-servicio.component';
import { DetalleGenpacienComponent } from './components/genpacien/detalle-genpacien.component';
import { ListaGenpacienComponent } from './components/genpacien/lista-genpacien.component';
import { HomeComponent } from './components/home/home.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { DetallePacienteComponent } from './components/paciente/detalle-paciente.component';
import { EditarPacienteComponent } from './components/paciente/editar-paciente.component';
import { ListaPacienteComponent } from './components/paciente/lista-paciente.component';
import { NuevoPacienteComponent } from './components/paciente/nuevo-paciente.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ProdGuardService as guard} from './guards/prod-guard.service';

const routes: Routes = [
   { path: 'inicio', component: InicioComponent, children:[
    { path: 'home', component: HomeComponent},
    { path: 'quienes-somos', component: QuienesSomosComponent},
  ]},

  { path: 'login', component: LoginComponent},
  { path: 'registro', component: RegistroComponent},

  { path: 'camilleros', component: CamillerosComponent,  children:[
    { path: 'inicio', component: InicioCamillerosComponent },

    //{ path: 'paciente/lista', component: ListaPacienteComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user']} },
    //{ path: 'paciente/detalle/:id', component: DetallePacienteComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user']} },
    //{ path: 'paciente/nuevo', component: NuevoPacienteComponent, canActivate: [guard], data: { expectedRol: ['admin']} },
    //{ path: 'paciente/editar/:id', component: EditarPacienteComponent, canActivate: [guard], data: { expectedRol: ['admin']} },
    
    { path: 'camillero/lista', component: ListaCamilleroComponent, canActivate: [guard], data: { expectedRol: ['admin']}},
    { path: 'camillero/detalle/:id', component: DetalleCamilleroComponent, canActivate: [guard], data: { expectedRol: ['admin']}},
    { path: 'camillero/nuevo', component: NuevoCamilleroComponent, canActivate: [guard], data: { expectedRol: ['admin']}},
    { path: 'camillero/editar/:id', component: EditarCamilleroComponent, canActivate: [guard], data: { expectedRol: ['admin']}},

    { path: 'servicio/lista', component: ListaServicioComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user']}},
    { path: 'servicio/detalle/:id', component: DetalleServicioComponent, canActivate: [guard], data: { expectedRol: ['admin']}},
    { path: 'servicio/nuevo', component: NuevoServicioComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user']}},
    { path: 'servicio/editar/:id', component: EditarServicioComponent, canActivate: [guard], data: { expectedRol: ['admin']}},

    { path: 'genpacien/lista', component: ListaGenpacienComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user']} },
    { path: 'genpacien/detalle/:pacnumdoc', component: DetalleGenpacienComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user']} },
  ]},
 
     
    { path: '**', redirectTo: 'inicio/home' },
    { path: '', pathMatch: 'full', redirectTo: 'inicio/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login.component';
//import { NewLoginComponent } from './components/auth/new-login.component';
import { RegistroComponent } from './components/auth/registro.component';
import { DetalleCamilleroComponent } from './components/camillero/detalle-camillero.component';
import { EditarCamilleroComponent } from './components/camillero/editar-camillero.component';
import { ListaCamilleroComponent } from './components/camillero/lista-camillero.component';
import { NuevoCamilleroComponent } from './components/camillero/nuevo-camillero.component';
import { CamillerosComponent } from './components/camilleros/camilleros/camilleros.component';
import { InicioCamillerosComponent } from './components/camilleros/inicio/inicio.component';
import { ConsultaServicioComponent } from './components/camilleros/servicio/consulta-servicio.component'
import { DetalleServicioComponent } from './components/camilleros/servicio/detalle-servicio.component';
import { EditarServicioComponent } from './components/camilleros/servicio/editar-servicio.component';
import { ListaServicioComponent } from './components/camilleros/servicio/lista-servicio.component';
import { NuevoServicioComponent } from './components/camilleros/servicio/nuevo-servicio.component';
import { DetalleGenpacienComponent } from './components/genpacien/detalle-genpacien.component';
import { ListaGenpacienComponent } from './components/genpacien/lista-genpacien.component';
import { HomeComponent } from './components/home/home.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { LoginGuard } from './guards/login.guard';
import { ProdGuardService } from './guards/prod-guard.service';

const routes: Routes = [
  {
    path: 'inicio', component: InicioComponent, children: [
      { path: 'home', component: HomeComponent },
      { path: 'quienes-somos', component: QuienesSomosComponent },
      { path: 'contactenos', component: FooterComponent }
    ]
  },
  { path: 'login', component: LoginComponent },
  //{ path: 'nuevo-login', component: NewLoginComponent },
  { path: 'registro', component: RegistroComponent },

  {
    path: 'camilleros', component: CamillerosComponent, children: [
      { path: 'inicio', component: InicioCamillerosComponent },

      { path: 'camillero/lista', component: ListaCamilleroComponent, canActivate: [ProdGuardService], data: { expectedRol: ['superadmin', 'admin'] } },
      { path: 'camillero/detalle/:id', component: DetalleCamilleroComponent, canActivate: [ProdGuardService], data: { expectedRol: ['superadmin', 'admin'] } },
      { path: 'camillero/nuevo', component: NuevoCamilleroComponent, canActivate: [ProdGuardService], data: { expectedRol: ['superadmin', 'admin'] } },
      { path: 'camillero/editar/:id', component: EditarCamilleroComponent, canActivate: [ProdGuardService], data: { expectedRol: ['superadmin', 'admin'] } },

      { path: 'servicio/lista', component: ListaServicioComponent, canActivate: [ProdGuardService], data: { expectedRol: ['superadmin', 'admin', 'user'] } },
      { path: 'servicio/detalle/:id', component: DetalleServicioComponent, canActivate: [ProdGuardService], data: { expectedRol: ['superadmin', 'admin', 'user'] } },
      { path: 'servicio/nuevo', component: NuevoServicioComponent, canActivate: [ProdGuardService], data: { expectedRol: ['superadmin', 'admin', 'user'] } },
      { path: 'servicio/editar/:id', component: EditarServicioComponent, canActivate: [ProdGuardService], data: { expectedRol: ['superadmin', 'admin'] } },
      { path: 'servicio/consultar', component: ConsultaServicioComponent, canActivate: [ProdGuardService], data: { expectedRol: ['superadmin', 'admin'] } },


      { path: 'genpacien/lista', component: ListaGenpacienComponent, canActivate: [ProdGuardService], data: { expectedRol: ['superadmin', 'admin', 'user'] } },
      { path: 'genpacien/detalle/:pacnumdoc', component: DetalleGenpacienComponent, canActivate: [ProdGuardService], data: { expectedRol: ['superadmin', 'admin', 'user'] } },
    ]
  },
  { path: '**', redirectTo: 'inicio/home' },
  { path: '', pathMatch: 'full', redirectTo: 'inicio/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

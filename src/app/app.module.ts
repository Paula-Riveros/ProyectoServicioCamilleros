import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicioService } from './service/servicio.service';
import { HomeComponent } from './components/home/home.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselComponent } from './components/shared/carousel/carousel.component';
import { NavbarLoginComponent } from './components/shared/navbar-login/navbar-login.component';
//import { ListaPacienteComponent } from './components/paciente/lista-paciente.component';
//import { DetallePacienteComponent } from './components/paciente/detalle-paciente.component';
//import { NuevoPacienteComponent } from './components/paciente/nuevo-paciente.component';
//import { EditarPacienteComponent } from './components/paciente/editar-paciente.component';
import { CamillerosComponent } from './components/camilleros/camilleros/camilleros.component';
import { InicioCamillerosComponent } from './components/camilleros/inicio/inicio.component';
import { interceptorProvider } from './interceptors/prod-interceptor.service';
import { LoginComponent } from './components/auth/login.component';
import { RegistroComponent } from './components/auth/registro.component';
import { ListaServicioComponent } from './components/camilleros/servicio/lista-servicio.component';
import { DetalleServicioComponent } from './components/camilleros/servicio/detalle-servicio.component';
import { NuevoServicioComponent } from './components/camilleros/servicio/nuevo-servicio.component';
import { EditarServicioComponent } from './components/camilleros/servicio/editar-servicio.component';
import { ConsultaServicioComponent } from './components/camilleros/servicio/consulta-servicio.component';
import { ListaCamilleroComponent } from './components/camillero/lista-camillero.component';
import { DetalleCamilleroComponent } from './components/camillero/detalle-camillero.component';
import { NuevoCamilleroComponent } from './components/camillero/nuevo-camillero.component';
import { EditarCamilleroComponent } from './components/camillero/editar-camillero.component';
import { ListaGenpacienComponent } from './components/genpacien/lista-genpacien.component';
import { DetalleGenpacienComponent } from './components/genpacien/detalle-genpacien.component';
import { FiltroFechaPipe } from './components/pipes/filtro-fecha.pipe';
import { NgxPaginationModule } from 'ngx-pagination';




// External
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { PromedioPipe } from './components/pipes/promedio.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuienesSomosComponent,
    NavbarComponent,
    HeaderComponent,
    InicioComponent,
    FooterComponent,
    CarouselComponent,
    NavbarLoginComponent,
    //ListaPacienteComponent,
    //DetallePacienteComponent,
    //NuevoPacienteComponent,
    //EditarPacienteComponent,
    CamillerosComponent,
    InicioCamillerosComponent,
    LoginComponent,
    RegistroComponent,
    ListaServicioComponent,
    DetalleServicioComponent,
    NuevoServicioComponent,
    EditarServicioComponent,
    ListaCamilleroComponent,
    DetalleCamilleroComponent,
    NuevoCamilleroComponent,
    EditarCamilleroComponent,
    ListaGenpacienComponent,
    DetalleGenpacienComponent,
    FiltroFechaPipe,
    ConsultaServicioComponent,
    PromedioPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxPaginationModule, 
    ToastrModule.forRoot()
  ],
  providers: [ServicioService, interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }

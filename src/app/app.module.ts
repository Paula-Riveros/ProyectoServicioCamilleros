import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicioService } from './servicio.service';
import { HomeComponent } from './components/home/home.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselComponent } from './components/shared/carousel/carousel.component';
import { LoginUsuarioComponent } from './components/user/login-usuario/login-usuario.component';
import { NavbarLoginComponent } from './components/shared/navbar-login/navbar-login.component';
import { ListaPacienteComponent } from './components/paciente/lista-paciente.component';
import { DetallePacienteComponent } from './components/paciente/detalle-paciente.component';
import { NuevoPacienteComponent } from './components/paciente/nuevo-paciente.component';
import { EditarPacienteComponent } from './components/paciente/editar-paciente.component';
import { CamillerosComponent } from './components/camilleros/camilleros/camilleros.component';
import { InicioCamillerosComponent } from './components/camilleros/inicio/inicio.component';


// External
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './components/auth/login.component';
import { RegistroComponent } from './components/auth/registro.component';
import { MenuComponent } from './components/menu/menu.component';



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
    LoginUsuarioComponent,
    NavbarLoginComponent,
    ListaPacienteComponent,
    DetallePacienteComponent,
    NuevoPacienteComponent,
    EditarPacienteComponent,
    CamillerosComponent,
    InicioCamillerosComponent,
    LoginComponent,
    RegistroComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot()
  ],
  providers: [ServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }

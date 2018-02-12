import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { ProyeccionesComponent } from './components/proyecciones/proyecciones.component';
import {HttpModule} from '@angular/http/'



//Rutas
import { APP_ROUTING } from './app.routes';
import { AntecedentesComponent } from './components/antecedentes/antecedentes.component';

//servicios
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { DataserviceService } from './services/dataservice.service';


//graficos
import { ChartsModule } from "ng2-charts";



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AdminComponent,
    ProyeccionesComponent,
    AntecedentesComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [AuthService, AuthGuardService, DataserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

//Modulos
import {HttpModule} from '@angular/http/'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './shared/material.module';

//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { PhpComponentComponent } from './components/php-component/php-component.component';
import { ProyeccionesComponent } from './components/proyecciones/proyecciones.component';
import { TabladatosComponent } from './components/tabladatos/tabladatos.component';
import { SelecvariablesComponent } from './components/selecvariables/selecvariables.component';



//Rutas
import { APP_ROUTING } from './app.routes';
import { AntecedentesComponent } from './components/antecedentes/antecedentes.component';

//servicios
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { DataserviceService } from './services/dataservice.service';
import { LocaldataService } from './services/localdata.service';
import { PhpService } from './services/php.service';

//graficos
import { ChartsModule } from "ng2-charts";
import { SelctgrafComponent } from './components/selctgraf/selctgraf.component';







@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AdminComponent,
    ProyeccionesComponent,
    AntecedentesComponent,
    TabladatosComponent,
    PhpComponentComponent,
    SelecvariablesComponent,
    SelctgrafComponent,
    
 
   
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    HttpModule,
    APP_ROUTING,
    MaterialModule
  ],
  providers: [AuthService, AuthGuardService, DataserviceService,LocaldataService, PhpService],
  bootstrap: [AppComponent]
})
export class AppModule { }

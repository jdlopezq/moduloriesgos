//Modulos
import { HttpModule } from '@angular/http/'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './shared/material.module';

//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { ProyeccionesComponent } from './components/proyecciones/proyecciones.component';
import { TabladatosComponent } from './components/tabladatos/tabladatos.component';
import { SelecvariablesComponent } from './components/selecvariables/selecvariables.component';



//Rutas
import { APP_ROUTING } from './app.routes';
import { AntecedentesComponent } from './components/antecedentes/antecedentes.component';

//servicios
import { DataserviceService } from './services/dataservice.service';
import { PhpService } from './services/php.service';

//graficos
import { ChartsModule } from "ng2-charts";
import { SelctgrafComponent } from './components/selctgraf/selctgraf.component';
import { LogscreenComponent } from './components/logscreen/logscreen.component';
import { RegistuserComponent } from './components/registuser/registuser.component';
import { LoadarchComponent } from './components/loadarch/loadarch.component';
import { ChangePassComponent } from './components/change-pass/change-pass.component';
import { ModifyUserComponent } from './components/modify-user/modify-user.component';








@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AdminComponent,
    ProyeccionesComponent,
    AntecedentesComponent,
    TabladatosComponent,
    SelecvariablesComponent,
    SelctgrafComponent,
    LogscreenComponent,
    RegistuserComponent,
    LoadarchComponent,
    ChangePassComponent,
    ModifyUserComponent,
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    HttpModule,
    APP_ROUTING,
    MaterialModule
  ],
  providers: [DataserviceService, PhpService],
  bootstrap: [AppComponent]
})
export class AppModule { }

//Modulos
import { HttpModule } from '@angular/http/'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './shared/material.module';
import { AmChartsModule } from "@amcharts/amcharts3-angular";

//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { ProyeccionesComponent } from './components/var-graph/proyecciones.component';
import { TabladatosComponent } from './components/data-table/tabladatos.component';
import { SelecvariablesComponent } from './components/selecvariables/selecvariables.component';
import { AntecedentesComponent } from './components/loans-index/antecedentes.component';
import { LogscreenComponent } from './components/logscreen/logscreen.component';
import { RegistuserComponent } from './components/regist-user/registuser.component';
import { LoadarchComponent } from './components/loadarch/loadarch.component';
import { ChangePassComponent } from './components/change-pass/change-pass.component';
import { ModifyUserComponent } from './components/modify-user/modify-user.component';
import { TestComponent } from './components/test/test.component';


//Rutas
import { APP_ROUTING } from './app.routes';

//servicios
import { DataserviceService } from './services/dataservice.service';
import { PhpService } from './services/php.service';
import { UtilityService } from './services/utility.service';

//graficos
import { ChartsModule } from "ng2-charts";
//import { ChartsModule } from "ng4-charts"
import { NgDropFilesDirective } from './directives/ng-drop-files.directive';


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
    LogscreenComponent,
    RegistuserComponent,
    LoadarchComponent,
    ChangePassComponent,
    ModifyUserComponent,
    TestComponent,
    NgDropFilesDirective,
    
  ],
  imports: [
    AmChartsModule,
    BrowserModule,
    ChartsModule,
    HttpModule,
    APP_ROUTING,
    MaterialModule
  ],
  providers: [DataserviceService, PhpService, UtilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }

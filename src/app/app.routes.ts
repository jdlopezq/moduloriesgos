import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { ProyeccionesComponent } from './components/var-graph/proyecciones.component';
import { AntecedentesComponent } from './components/loans-index/antecedentes.component';
import { TabladatosComponent } from './components/data-table/tabladatos.component';

import { SelecvariablesComponent } from './components/selecvariables/selecvariables.component';
import { LogscreenComponent } from './components/logscreen/logscreen.component';
import { LoadarchComponent } from './components/loadarch/loadarch.component';
import { TestComponent } from './components/test/test.component';


const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'proyecciones', component: ProyeccionesComponent },
  { path: 'antecedentes', component: AntecedentesComponent },
  { path: 'tabladatos', component: TabladatosComponent },
  { path: 'selectvariables', component:  SelecvariablesComponent },
  { path: 'logscreen', component:  LogscreenComponent },
  { path: 'loadarch', component:  LoadarchComponent },
  { path: 'selectgraph', component:  TestComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

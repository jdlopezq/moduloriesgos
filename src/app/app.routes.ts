import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { ProyeccionesComponent } from './components/proyecciones/proyecciones.component';
import { AntecedentesComponent } from './components/antecedentes/antecedentes.component';
import { TabladatosComponent } from './components/tabladatos/tabladatos.component';

import { SelecvariablesComponent } from './components/selecvariables/selecvariables.component';
import { SelctgrafComponent } from './components/selctgraf/selctgraf.component';
import { LogscreenComponent } from './components/logscreen/logscreen.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'proyecciones', component: ProyeccionesComponent },
  { path: 'antecedentes', component: AntecedentesComponent },
  { path: 'tabladatos', component: TabladatosComponent },
  { path: 'selectvariables', component:  SelecvariablesComponent },
  { path: 'selctgraficos', component:  SelctgrafComponent },
  { path: 'logscreen', component:  LogscreenComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { ProyeccionesComponent } from './components/proyecciones/proyecciones.component';
import { AntecedentesComponent } from './components/antecedentes/antecedentes.component';
import { AuthGuardService } from './services/auth-guard.service';
import { TabladatosComponent } from './components/tabladatos/tabladatos.component';
import { PhpComponentComponent } from './components/php-component/php-component.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent, canActivate:[AuthGuardService] },
  { path: 'proyecciones', component: ProyeccionesComponent },
  { path: 'antecedentes', component: AntecedentesComponent },
  { path: 'tabladatos', component: TabladatosComponent },
  { path: 'phpcomponent', component: PhpComponentComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

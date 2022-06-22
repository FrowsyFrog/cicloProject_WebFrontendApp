import { FindrutasComponent } from './findrutas/findrutas.component';
import { ReportsComponent } from './components/reports/reports.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CicloviasComponent } from './components/ciclovias/ciclovias.component';
import { ParkingsComponent } from './components/parkings/parkings.component';
import { RutaComponent } from './components/ruta/ruta.component';
import { AccountComponent } from './components/account/account.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

const routes: Routes = [
  {path: 'parkings', component: ParkingsComponent},
  {path: 'ciclovias', component: CicloviasComponent},
  {path: 'reports', component: ReportsComponent},
  {path: 'rutas', component: RutaComponent},
  {path: 'findrutas', component: FindrutasComponent},
  {path: 'accounts', component: AccountComponent},
  {path: 'usuarios', component: UsuarioComponent},
  {path: '', redirectTo: '/accounts', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

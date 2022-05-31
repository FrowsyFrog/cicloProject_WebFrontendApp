import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CicloviasComponent} from './components/ciclovias/ciclovias.component';
import {ParkingsComponent} from './components/parkings/parkings.component';
import { RutaComponent } from './components/ruta/ruta.component';

const routes: Routes = [
  {path: 'parkings', component: ParkingsComponent},
  {path: 'ciclovias', component: CicloviasComponent},
  {path: 'rutas', component: RutaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

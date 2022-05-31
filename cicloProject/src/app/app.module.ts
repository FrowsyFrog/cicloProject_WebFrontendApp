import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { CicloviasComponent } from './components/ciclovias/ciclovias.component';
import { ParkingsComponent } from './components/parkings/parkings.component';
import { HttpClientModule } from '@angular/common/http';
import { ReportsComponent } from './components/reports/reports.component';
import { ParkingDetailsComponent } from './components/parkings/parking-details/parking-details.component';
import { CicloviaDetailsComponent } from './components/ciclovias/ciclovia-details/ciclovia-details.component';
import { RutaComponent } from './components/ruta/ruta.component';
import { FindrutasComponent } from './findrutas/findrutas.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { AccountComponent } from './components/account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    CicloviasComponent,
    ParkingsComponent,
    ReportsComponent,
    FindrutasComponent,
    ParkingDetailsComponent,
    CicloviaDetailsComponent,
    RutaComponent,
    UsuarioComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

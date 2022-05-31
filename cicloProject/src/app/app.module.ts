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
import { RutaComponent } from './components/ruta/ruta.component';
import { FindrutasComponent } from './findrutas/findrutas.component';

@NgModule({
  declarations: [
    AppComponent,
    CicloviasComponent,
    ParkingsComponent,
    ReportsComponent,
    RutaComponent,
    FindrutasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

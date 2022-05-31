import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { CicloviasComponent } from './components/ciclovias/ciclovias.component';
import { ParkingsComponent } from './components/parkings/parkings.component';
import { HttpClientModule } from '@angular/common/http';
import { ParkingDetailsComponent } from './components/parkings/parking-details/parking-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CicloviasComponent,
    ParkingsComponent,
    ParkingDetailsComponent,
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

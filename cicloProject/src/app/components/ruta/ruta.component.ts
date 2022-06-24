import { BikelaneServiceService } from 'src/app/services/bikelane-service.service';
import { Component, OnInit } from '@angular/core';
import { Ruta, Bikelane } from 'src/app/models/entities';
import { RutaxCiclovia } from './../../models/entities';
import { RutaService } from 'src/app/services/ruta.service';

@Component({
  selector: 'app-ruta',
  templateUrl: './ruta.component.html',
  styleUrls: ['./ruta.component.css']
})
export class RutaComponent implements OnInit {

  tiempoRealizado: number = 0;
  viewMode2 = false;
  viewMode3 = false;
  ruta: Ruta = new Ruta;
  idSelectedBikelane: number = -1;
  bikelanes: Bikelane[] = [];
  rutas?: Ruta[];
  rutaxCiclovias?: RutaxCiclovia[];
  submitted = false;
  submittedrc = false;
  selected = false;
  error = false;
  errorc = true;
  error_msg = "";

  constructor(private rutaService: RutaService, private bikelaneService: BikelaneServiceService) { }

  ngOnInit(): void {
    this.retrieveRutas();
  }

  showRutaCiclovia(): void{
    this.viewMode2=true;
    this.retrieveBikelanes();
  }
  newRutaCiclovia(bikelane: Bikelane):void{
    this.navigate();
    this.idSelectedBikelane = Number(bikelane.idCiclovia);
  }
  saveRutaCiclovia():void{
    const data = {
      tiempoRealizado: this.tiempoRealizado,
      idRuta: this.ruta.idRuta,
      idCiclovia: this.idSelectedBikelane      
    };
    this.error = false;
    this.error_msg = "";
    this.rutaService.createRutaCiclovia(data).subscribe({
      next: (res) => {
        this.submittedrc=true;
        this.errorc=false;
        this.ResRutaCiclovia();
      },
      error: (e) => { 
        console.error(e);
        this.errorc = true;
        this.error_msg = e.error.message
      }
    });
  }
  ResRutaCiclovia():void{
    this.submittedrc = false;
    document.getElementById('myModal2')?.click();
  
    this.navigate();
    this.getCurRutasCiclovias();
  }

  navigate(): void{
    this.viewMode2 = !this.viewMode2;
  }

  lengthCheck(value: any): any{
    if (value?.length != 0) return true;
    else return false;
  }

  retrieveBikelanes(): void {
    this.bikelaneService.getList().subscribe({
      next: (data) => {
        this.bikelanes = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }

  retrieveRutas(): void {
    this.rutaService.getAll().subscribe({
      next: (data) => {
        this.rutas = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }
  retrieveCiclovias(ruta: Ruta): void {
    this.ruta = ruta;
    if(this.selected == false) {
      this.getCurRutasCiclovias();      
    }
    else {
      this.selected = false;
    }
  }
  getCurRutasCiclovias(): void{
    this.selected = true;
      this.rutaService.getCicloviasByRuta(this.ruta.idRuta).subscribe({
        next: (data) => {
          this.rutaxCiclovias = data;
          console.log(data);
        },
        error: (e) => console.error(e),
      })
  }

  saveRuta() : void {
    let data = {
      ubicacionSalida: this.ruta.ubicacionSalida,
      ubicacionLlegada: this.ruta.ubicacionLlegada,
      idUser: this.ruta.idUser
    };
    this.error = false;
    this.error_msg = "";
    this.rutaService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
        this.error = false;
      },
      error: (e) => { 
        console.error(e);
        this.error = true;
        this.error_msg = e.error.message
      }
    });
  }
  newRuta() : void {
    this.submitted = false;
    this.ruta = new Ruta;
    this.error = false;
    this.error_msg = "";
    this.retrieveRutas();
  }

}

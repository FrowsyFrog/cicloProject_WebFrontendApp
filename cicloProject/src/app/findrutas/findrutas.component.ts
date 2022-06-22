import { FindrutasserviceService } from './../services/findrutasservice.service';
import { Ruta } from './../models/entities';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-findrutas',
  templateUrl: './findrutas.component.html',
  styleUrls: ['./findrutas.component.css']
})
export class FindrutasComponent implements OnInit {

  ubicacionSalida: string;
  ubicacionLlegada: string;
  rutas?: Ruta[];
  submitted = false;
  error = false;
  error_msg = "";
  avgtime = 0;
  fastestSearched: boolean = false;
  rutaF: Ruta;
  timeF: number;

  constructor(private findrutasService: FindrutasserviceService,) { }

  ngOnInit(): void {
  }

  retrieveRutas(): void {
    this.fastestSearched = false;
    this.findrutasService.getRutasXPuntos(this.ubicacionSalida,this.ubicacionLlegada).subscribe({
      next: (data) => {
        this.rutas = data;
        this.error = false;
        console.log(data);
        this.findrutasService.getTiempoEstimado(this.ubicacionSalida,this.ubicacionLlegada).subscribe({
          next: (data) => {
            this.avgtime = data;
          },
          error: (e) => { 
            console.error(e);
            this.error = true;
            this.error_msg = e.error.message
          }
        });
      },
      error: (e) => { 
        console.error(e);
        this.error = true;
        this.error_msg = e.error.message
      }
    });
  }

  retrieveFastest():void {
    this.fastestSearched = true;
    this.findrutasService.getTiempoMinimo(this.ubicacionSalida,this.ubicacionLlegada).subscribe({
      next: (data) => {
        this.rutaF = data;
        this.findrutasService.getTiempoMinimo2(this.ubicacionSalida,this.ubicacionLlegada).subscribe({
          next: (data) => {
            this.timeF = data;
          }
        })
      },
      error: (e) => { 
        console.error(e);
        this.error = true;
        this.error_msg = e.error.message
      }
    });
  }

  console(a:any){
    console.log(a);
    }
    
}

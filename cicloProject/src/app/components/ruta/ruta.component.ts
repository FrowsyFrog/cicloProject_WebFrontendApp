import { Component, OnInit } from '@angular/core';
import { Ruta } from 'src/app/models/entities';
import { RutaxCiclovia } from './../../models/entities';
import { RutaService } from 'src/app/services/ruta.service';

@Component({
  selector: 'app-ruta',
  templateUrl: './ruta.component.html',
  styleUrls: ['./ruta.component.css']
})
export class RutaComponent implements OnInit {

  ruta: Ruta = new Ruta;
  rutas?: Ruta[];
  rutaxCiclovias?: RutaxCiclovia[];
  submitted = false;
  selected = false;
  error = false;
  error_msg = "";

  constructor(private rutaService: RutaService) { }

  ngOnInit(): void {
    this.retrieveRutas();
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
      this.selected = true;
      this.rutaService.getCicloviasByRuta(ruta.idRuta).subscribe({
        next: (data) => {
          this.rutaxCiclovias = data;
          console.log(data);
        },
        error: (e) => console.error(e),
      })
    }
    else {
      this.selected = false;
    }
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
        this.retrieveRutas();
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

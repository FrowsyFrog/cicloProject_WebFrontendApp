import { FindrutasserviceService } from './../services/findrutasservice.service';
import { Ruta } from './../models/entities';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-findrutas',
  templateUrl: './findrutas.component.html',
  styleUrls: ['./findrutas.component.css']
})
export class FindrutasComponent implements OnInit {

  ubicacionSalida: any;
  ubicacionLlegada: any;
  rutas?: Ruta[];
  submitted = false;
  error = false;
  error_msg = "";

  constructor(private findrutasService: FindrutasserviceService,) { }

  ngOnInit(): void {
    this.retrieveRutas();
  }

  retrieveRutas(): void {
    this.findrutasService.getRutasXPuntos(this.ubicacionSalida,this.ubicacionLlegada).subscribe({
      next: (data) => {
        this.rutas = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }

  console(a:any){
    console.log(a);
    }
    
}

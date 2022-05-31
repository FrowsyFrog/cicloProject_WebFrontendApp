import { Component, OnInit } from '@angular/core';
import {Bikelane} from 'src/app/models/entities';
import {BikelaneServiceService} from 'src/app/services/bikelane-service.service';

@Component({
  selector: 'app-ciclovias',
  templateUrl: './ciclovias.component.html',
  styleUrls: ['./ciclovias.component.css']
})
export class CicloviasComponent implements OnInit {

  selectedBikelane?: Bikelane;
  averageStars? : number;
  bikelane: Bikelane = new Bikelane;
  bikelanes?: Bikelane[];
  submitted = false;
  error = false;
  error_msg = "";

  constructor(private bikelaneService: BikelaneServiceService) { }

  ngOnInit(): void {
    this.retrieveBikelanes();
  }

  onSelect(bikelane: Bikelane): void {
    this.selectedBikelane = bikelane;
    this.bikelaneService.getStars(this.selectedBikelane.idCiclovia).subscribe({
      next: (data) => {
        this.averageStars = data;
      },
      error: (e) => console.error(e),
      complete: () => console.log('done')
    });
    console.log(this.selectedBikelane);
  }

  retrieveBikelanes(): void {
    this.bikelaneService.getAll().subscribe({
      next: (data) => {
        this.bikelanes = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }
  saveBikelane() : void {

    let data = {
      nombreCiclovia: this.bikelane.nombreCiclovia
    };
    this.error = false;
    this.error_msg = "";
    this.bikelaneService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
        this.error = false;
        this.retrieveBikelanes();
      },
      error: (e) => { 
        console.error(e);
        this.error = true;
        this.error_msg = e.error.message
      }
    });
  }
  newBikelane() : void {
    this.submitted = false;
    this.bikelane = new Bikelane;
    this.error = false;
    this.error_msg = "";
    this.retrieveBikelanes();
  }

}

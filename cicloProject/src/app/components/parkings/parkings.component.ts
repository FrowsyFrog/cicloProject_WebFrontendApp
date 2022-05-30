import { Component, OnInit } from '@angular/core';
import {Parking} from 'src/app/models/entities';
import {ParkingService} from 'src/app/services/parking.service';

@Component({
  selector: 'app-parkings',
  templateUrl: './parkings.component.html',
  styleUrls: ['./parkings.component.css']
})
export class ParkingsComponent implements OnInit {

  parking: Parking = new Parking;
  parkings?: Parking[];
  submitted = false;
  error = false;
  error_msg = "";

  constructor(private parkingService: ParkingService) { }

  ngOnInit(): void {
    this.retrieveParkings();
  }

  retrieveParkings(): void {
    this.parkingService.getAll().subscribe({
      next: (data) => {
        this.parkings = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }
  saveParking() : void {

    let data = {
      ubicacion: this.parking.ubicacion,
      isFull: 0,
      stars: this.parking.stars
    };
    this.error = false;
    this.error_msg = "";
    this.parkingService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
        this.error = false;
        this.retrieveParkings();
      },
      error: (e) => { 
        console.error(e);
        this.error = true;
        this.error_msg = e.error.message
      }
    });
  }
  newParking() : void {
    this.submitted = false;
    this.parking = new Parking;
    this.error = false;
    this.error_msg = "";
    this.retrieveParkings();
  }

}

import { Component, OnInit } from '@angular/core';
import { throttleTime } from 'rxjs';
import {Parking} from 'src/app/models/entities';
import {Rating} from 'src/app/models/entities';
import {ParkingService} from 'src/app/services/parking.service';

@Component({
  selector: 'app-parkings',
  templateUrl: './parkings.component.html',
  styleUrls: ['./parkings.component.css']
})
export class ParkingsComponent implements OnInit {

  parking: Parking = new Parking;
  rating: Rating = new Rating;
  parkings?: Parking[];
  submitted = false;
  searched = false;
  filtered = false;
  error = false;
  error_msg = "";
  currentParking: Parking = {};
  currentIndex = -1;
  stars: number;

  constructor(private parkingService: ParkingService) { }

  ngOnInit(): void {
    this.retrieveParkings();
  }

  setActiveParking(parking: Parking, index: number): void {
    this.currentParking = parking;
    this.currentIndex = index;
  }

  retrieveParkings(): void {
    this.filtered = false;
    this.searched = false;
    this.parkingService.getAll().subscribe({
      next: (data) => {
        this.parkings = data;
      },
      error: (e) => console.error(e),
    });
  }
  retrieveParkingsxStars(): void {
    this.searched = true;
    this.parkingService.getParkingxStars(this.stars).subscribe({
      next: (data) => {
        this.parkings = data;
      },
      error: (e) => console.error(e),
    });
  }
  retrieveParkingsDisp(): void {
    this.filtered = true;
    this.parkingService.getParkingsDisp().subscribe({
      next: (data) => {
        this.parkings = data;
      },
      error: (e) => console.error(e),
    });
  }
  saveParking() : void {
    let data = {
      ubicacion: this.parking.ubicacion,  
      totalSlots: this.parking.totalSlots,
      isFull: false,
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
    this.searched = false;
    this.filtered = false;
    this.parking = new Parking;
    this.error = false;
    this.error_msg = "";
    this.retrieveParkings();
  }

}

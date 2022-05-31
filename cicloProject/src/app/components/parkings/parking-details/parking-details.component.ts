import { ActivatedRoute, Router } from '@angular/router';
import { ParkingService } from './../../../services/parking.service';
import { Component, Input, OnInit } from '@angular/core';
import { Parking, Rating } from 'src/app/models/entities';

@Component({
  selector: 'app-parking-details',
  templateUrl: './parking-details.component.html',
  styleUrls: ['./parking-details.component.css']
})
export class ParkingDetailsComponent implements OnInit {
  @Input() viewMode = false;
  viewMode2 = false;
  viewMode3 = false;

  @Input() currentParking: Parking = {
    ubicacion: '',
    stars: NaN,
    isFull: NaN,
  }

  ratings?: Rating[];
  rating: Rating = new Rating;


  submitted = false;
   
  closeResult: string = '';

  constructor(private parkingService: ParkingService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.getParking(this.route.snapshot.params['id']);
    }
    if(this.viewMode2){
      this.getRating(this.route.snapshot.params['id']);
    }
  } 

  lengthCheck(value: any): any{
    if (value?.length != 0) return true;
    else return false;
  }

  getParking(id: string): void {
    this.parkingService.get(id).subscribe({
      next: (data) => {
        this.currentParking = data;
      },
      error: (e) => console.error(e),
    });
  }

  getRating(id: number): void{
    this.viewMode2=true;
    this.parkingService.getRating(id).subscribe({
      next: (data) => {
        this.ratings = data;
      },
      error: (e) => console.error(e),
    });
  }

  saveRating() : void {

    let data = {
      stars: this.rating.stars,
      descripcion: this.rating.descripcion,
      idciclovia: NaN,
      idparking: this.currentParking.id,
    };
    this.parkingService.createRating(this.currentParking.id, data).subscribe({
      next: (res) => {
        this.submitted = true;
      },
      error: (e) => { 
        console.error(e);
      }
    });
    this.newRating();
  }
  newRating() : void {
    this.submitted = false;
    this.rating = new Rating;
    this.navigate();
  }

  navigate(): void{
    this.viewMode = !this.viewMode;
    this.viewMode2 = !this.viewMode2;
    this.viewMode3 = !this.viewMode3;
  }

}

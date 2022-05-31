import { BikelaneServiceService } from './../../../services/bikelane-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ParkingService } from './../../../services/parking.service';
import { Component, Input, OnInit } from '@angular/core';
import { Parking, Rating, Bikelane } from 'src/app/models/entities';

@Component({
  selector: 'app-ciclovia-details',
  templateUrl: './ciclovia-details.component.html',
  styleUrls: ['./ciclovia-details.component.css']
})
export class CicloviaDetailsComponent implements OnInit {
  @Input() viewMode = false;
  viewMode2 = false;
  viewMode3 = false;

  @Input() currentBikelane: Bikelane = {
    nombreCiclovia: ''
  }

  @Input() averageStars: number = 0;

  ratings?: Rating[];
  rating: Rating = new Rating;


  submitted = false;
   
  closeResult: string = '';

  constructor(private bikelaneService: BikelaneServiceService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    if(this.viewMode2){
      this.getRating(this.route.snapshot.params['id']);
    }
  } 

  lengthCheck(value: any): any{
    if (value?.length != 0) return true;
    else return false;
  }

  getRating(id: number): void{
    this.viewMode2=true;
    this.bikelaneService.getRating(id).subscribe({
      next: (data) => {
        this.ratings = data;
      },
      error: (e) => console.error(e),
    });
  }

  saveRating() : void {
    const data = {
      estrellasCalificacion: this.rating.estrellasCalificacion,
      descripcionCalificacion: this.rating.descripcionCalificacion,
    };
    this.bikelaneService.createRating(this.currentBikelane.idCiclovia, data).subscribe({
      next: (res) => {
        this.submitted = true;
        this.newRating();
      },
      error: (e) => { 
        console.error(e);
      }
    });
  }
  newRating() : void {
    this.submitted = false;
    this.rating = new Rating;
    this.navigate();
  }

  navigate(): void{
    this.viewMode2 = !this.viewMode2;
    this.viewMode3 = !this.viewMode3;
  }

}

import { CicloviasComponent } from './../ciclovias.component';
import { BikelaneServiceService } from './../../../services/bikelane-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ParkingService } from './../../../services/parking.service';
import { Component, Input, OnInit } from '@angular/core';
import { Parking, Rating, Bikelane, Report } from 'src/app/models/entities';

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
  reports?: Report[];
  rating: Rating = new Rating;
  report: Report = new Report;

  submitted = false;
  error = false;
  error_msg = "";
   
  closeResult: string = '';

  constructor(private bikelaneService: BikelaneServiceService,
     private route: ActivatedRoute, 
     private cicloviasComponent: CicloviasComponent) {
  }

  ngOnInit(): void {
    if(this.viewMode2){
      this.getRating(this.route.snapshot.params['id']);
    }
    if(this.viewMode3){
      this.getReports(this.route.snapshot.params['id']);
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

  getReports(id: number): void{
    this.viewMode3=true;
    this.bikelaneService.getReports(id).subscribe({
      next: (data) => {
        this.reports = data;
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
        this.error = false;
        this.newRating();
        this.cicloviasComponent.UpdateActiveBikeLane();
      },
      error: (e) => { 
        console.error(e);
        this.error = true;
        this.error_msg = e.error.message;
      }
    });
  }

  saveReport() : void {
    const data = {
      description: this.report.description,
      idUser: this.report.idUser,
    };
    this.bikelaneService.createReport(this.currentBikelane.idCiclovia, data).subscribe({
      next: (res) => {
        this.submitted = true;
        this.error = false;
        this.newReport();
      },
      error: (e) => {
        console.error(e);
        this.error = true;
        this.error_msg = e.error.message;
      }
    });
  }


  newRating() : void {
    this.submitted = false;
    this.rating = new Rating;

    document.getElementById('myModal2')?.click();
  
    this.navigate();
  }

  newReport() : void {
    this.submitted = false;
    this.report = new Report;

    document.getElementById('myModal3')?.click();
  
    this.navigateReport();
  }

  navigate(): void{
    this.viewMode2 = !this.viewMode2;
    this.viewMode3  = false;
  }

  navigateReport(): void{
    this.viewMode3 = !this.viewMode3;
    this.viewMode2 = false;
  }

}
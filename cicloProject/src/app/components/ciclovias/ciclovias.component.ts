import { Component, OnInit } from '@angular/core';
import {Bikelane} from 'src/app/models/entities';
import {BikelaneServiceService} from 'src/app/services/bikelane-service.service';

@Component({
  selector: 'app-ciclovias',
  templateUrl: './ciclovias.component.html',
  styleUrls: ['./ciclovias.component.css']
})
export class CicloviasComponent implements OnInit {

  bikelane: Bikelane = new Bikelane;
  bikelanes: Bikelane[] = [];
  averageStars : number = 0;
  submitted = false;
  error = false;
  error_msg = "";
  currentBikelane: Bikelane = {};
  currentIndex = -1;
  bikelane_selected: boolean = false;

  page = 1;
  count = 0;
  pageSize = 3;
  pageSizes = [3, 6, 9];

  constructor(private bikelaneService: BikelaneServiceService) { }

  ngOnInit(): void {
    this.retrieveBikelanes();
    this.getLocation();
  }

  UpdateActiveBikeLane() : void {
    this.SetActiveBikelane(this.currentBikelane, this.currentIndex);
  }
  
  SetActiveBikelane(bikelane: Bikelane, index: number): void {
    this.bikelane_selected = true;
    this.currentBikelane = bikelane;
    this.currentIndex = index;

    this.bikelaneService.getStars(bikelane.idCiclovia).subscribe({
      next: (data) => {
        this.averageStars = data;
      },
      error: (e) => console.error(e),
      complete: () => console.log('done')
    });
  }

  getRequestParams(page:number, pageSize:number):any{
    let params: any = {};
    params['page'] = page - 1;
    params['size'] = pageSize;
    return params;
  }

  handlePageChange(event: number): void {
    this.page = event;
    this.retrieveBikelanes();
  }

  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.retrieveBikelanes();
  }

  retrieveBikelanes(): void {
    const params = this.getRequestParams(this.page, this.pageSize);
    this.bikelaneService.getAll(params).subscribe((response)=>{
      const{ciclovias, totalItems} = response;
      this.bikelanes = ciclovias;
      this.count = totalItems;
    },
    (error)=>{
      console.log(error);
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
  getLocation(): void{
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position)=>{
          console.log(position.coords);
          const longitude = position.coords.longitude;
          const latitude = position.coords.latitude;
        });
    } else {
       console.log("No support for geolocation")
    }
  }
}

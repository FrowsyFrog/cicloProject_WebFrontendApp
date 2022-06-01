import { Component, OnInit } from '@angular/core';
import { Report } from 'src/app/models/entities';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  report: Report = new Report;
  reports?:Report[];
  submitted = false;
  error = false;
  error_msg = "";

  constructor(private reportService: ReportService) { }

  ngOnInit(): void {
    this.retrieveReports();
  }

  retrieveReports(): void {
    this.reportService.getAll().subscribe({
      next: (data) => {
        this.reports = data;
        console.log(data);
      },
      error:(e) => console.error(e),
    });
  }

  saveReport() : void {

    let data = {
      description: this.report.description,
      idUser: this.report.idUser
    };
    this.error = false;
    this.error_msg = "";
    this.reportService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
        this.error = false;
        this.retrieveReports();
      },
      error: (e) => { 
        console.error(e);
        this.error = true;
        this.error_msg = e.error.message
      }
    });
  }

  newReport() : void {
    this.submitted = false;
    this.report = new Report;
    this.error = false;
    this.error_msg = "";
    this.retrieveReports();
  }
}

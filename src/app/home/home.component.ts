import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dashboard: any;

  constructor(private apiService: ApiServiceService) { }

  ngOnInit() {
    this.getDashboardData();
  }

  getDashboardData():void {
    this.apiService.getDashboardData().subscribe((res: any) => {
      this.dashboard = res.data;
    });    
  }

}

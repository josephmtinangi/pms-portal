import { Component, OnInit } from '@angular/core';
import { District } from 'src/app/_models/district.model';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-district-list',
  templateUrl: './district-list.component.html',
  styleUrls: ['./district-list.component.scss']
})
export class DistrictListComponent implements OnInit {

  districts: Array<District> = [];

  constructor(private apiService: ApiServiceService) { }

  ngOnInit() {
    this.getDistricts()
  }

  getDistricts(){
    this.apiService.getDistricts().subscribe((res: any) => {
      this.districts = res.data;
    })
  }

}

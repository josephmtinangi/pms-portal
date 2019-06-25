import { Component, OnInit } from '@angular/core';
import { Region } from 'src/app/_models/region.model';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-region-list',
  templateUrl: './region-list.component.html',
  styleUrls: ['./region-list.component.scss']
})
export class RegionListComponent implements OnInit {

  regions: Array<Region> = [];

  constructor(private apiService: ApiServiceService) { }

  ngOnInit() {
    this.getRegions()
  }

  getRegions(){
    this.apiService.getRegions().subscribe((res: any) => {
      this.regions = res.data;
    })
  }

}

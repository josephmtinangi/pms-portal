import { Component, OnInit } from '@angular/core';
import { RealEstateAgent } from 'src/app/_models/real_estate_agent.model';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-real-estate-agents-list',
  templateUrl: './real-estate-agents-list.component.html',
  styleUrls: ['./real-estate-agents-list.component.scss']
})
export class RealEstateAgentsListComponent implements OnInit {

  realEstateAgents: Array<RealEstateAgent> = [];

  constructor(private apiService: ApiServiceService) { }

  ngOnInit() {
    this.getRealEstateAgents()
  }

  getRealEstateAgents(){
    this.apiService.getRealEstateAgents().subscribe((res: any) => {
      this.realEstateAgents = res.data;
      console.log(this.realEstateAgents);
    })
  }

}

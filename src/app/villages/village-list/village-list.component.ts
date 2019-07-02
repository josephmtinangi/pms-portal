import { Component, OnInit } from '@angular/core';
import { Village } from 'src/app/_models/village.model';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-village-list',
  templateUrl: './village-list.component.html',
  styleUrls: ['./village-list.component.scss']
})
export class VillageListComponent implements OnInit {

  villages: Array<Village> = [];

  constructor(private apiService: ApiServiceService) { }

  ngOnInit() {
    this.getVillages()
  }

  getVillages(){
    this.apiService.getVillages().subscribe((res: any) => {
      this.villages = res.data;
    })
  }

}

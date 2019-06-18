import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {

  properties: Array<any> = [];

  constructor(private apiService: ApiServiceService) { }

  ngOnInit() {
    this.apiService.getProperties().subscribe((res: any) => {
      this.properties = res.data.data;
    });
  }

}

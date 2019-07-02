import { Component, OnInit } from '@angular/core';
import { PropertyType } from 'src/app/_models/property_type.model';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-property-type-list',
  templateUrl: './property-type-list.component.html',
  styleUrls: ['./property-type-list.component.scss']
})
export class PropertyTypeListComponent implements OnInit {

  propertyTypes: Array<PropertyType> = [];

  constructor(private apiService: ApiServiceService) { }

  ngOnInit() {
    this.getPropertyTypes();
  }

  getPropertyTypes(){
    this.apiService.getPropertyTypes().subscribe((res: any) => {
      this.propertyTypes = res.data;
    })
  }

}

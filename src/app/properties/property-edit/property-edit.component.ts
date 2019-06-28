import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PropertyType } from 'src/app/_models/property_type.model';
import { Client } from 'src/app/_models/client.model';
import { Region } from 'src/app/_models/region.model';
import { District } from 'src/app/_models/district.model';
import { Ward } from 'src/app/_models/ward.model';
import { Village } from 'src/app/_models/village.model';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-property-edit',
  templateUrl: './property-edit.component.html',
  styleUrls: ['./property-edit.component.scss']
})
export class PropertyEditComponent implements OnInit {

  propertyForm: FormGroup;
  property_types: Array<PropertyType> = [];
  clients: Array<Client> = [];
  regions: Array<Region> = [];
  districts: Array<District> = [];
  wards: Array<Ward> = [];
  villages: Array<Village> = [];
  submitted: boolean = false;
  success: boolean = false;
  errorMessage: string = null;  

  constructor(
    private apiService: ApiServiceService,
    private formBuilder: FormBuilder    
  ) { 
    this.propertyForm = this.formBuilder.group({
      name: [''],
      property_type_id: [''],
      commision: [''],
      floors: [''],
      client_id: [''],
      physical_address: [''],
      village_id: [''],
    });    
  }

  ngOnInit() {
    this.getPropertyTypes();
    this.getAllClients();
    this.getRegions();    
  }

  getPropertyTypes(){
    this.apiService.getPropertyTypes().subscribe((res: any) => {
      this.property_types = res.data;
    });
  }

  getAllClients() {
    this.apiService.getAllClients().subscribe((res: any) => {
      this.clients = res.data;
    });
  }

  getRegions() {
    this.apiService.getRegions().subscribe((res: any) => {
      this.regions = res.data;
    });
  }

  getRegionDistricts(id: any) {
    return this.apiService.getRegionDistricts(1).subscribe((res: any) => {
      this.districts = res.data;
    });
  }

  getDistrictWards(id: any) {
    return this.apiService.getDistrictWards(1).subscribe((res: any) => {
      this.wards = res.data;
    })
  }

  getWardVillages(id: any) {
    return this.apiService.getWardVillages(1).subscribe((res: any) => {
      this.villages = res.data;
    })
  }  

}

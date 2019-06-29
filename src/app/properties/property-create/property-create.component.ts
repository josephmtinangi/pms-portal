import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PropertyType } from 'src/app/_models/property_type.model';
import { ApiServiceService } from 'src/app/api-service.service';
import { Client } from 'src/app/_models/client.model';
import { Region } from 'src/app/_models/region.model';
import { District } from 'src/app/_models/district.model';
import { Ward } from 'src/app/_models/ward.model';
import { Village } from 'src/app/_models/village.model';
import { PaymentMode } from 'src/app/_models/payment_mode.model';

@Component({
  selector: 'app-property-create',
  templateUrl: './property-create.component.html',
  styleUrls: ['./property-create.component.scss']
})
export class PropertyCreateComponent implements OnInit {

  propertyForm: FormGroup;
  property_types: Array<PropertyType> = [];
  payment_modes: Array<PaymentMode> = [];
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
      payment_mode_id: [''],
      amount: [''],
      floors: [''],
      client_id: [''],
      physical_address: [''],
      village_id: [''],
    });
  }

  ngOnInit() {
    this.getPropertyTypes();
    this.getPaymentModes();
    this.getAllClients();
    this.getRegions();
  }

  store() {
    this.submitted = true;

    if(this.propertyForm.invalid){
      return;
    }

    this.apiService.storeProperty(this.propertyForm.value).subscribe((res: any) => {
      if(res.status == 200){
        this.submitted = false;
        this.success = true;
        this.propertyForm.reset();
      }
    },
    error => {
      this.success = false;
      this.submitted = false;
      this.errorMessage = error;
    })
  }

  getPaymentModes() {
    return this.apiService.getPaymentModes().subscribe((res: any) => {
      this.payment_modes = res.data;
    })
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

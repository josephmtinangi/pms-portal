import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PropertyType } from 'src/app/_models/property_type.model';
import { Client } from 'src/app/_models/client.model';
import { Region } from 'src/app/_models/region.model';
import { District } from 'src/app/_models/district.model';
import { Ward } from 'src/app/_models/ward.model';
import { Village } from 'src/app/_models/village.model';
import { ApiServiceService } from 'src/app/api-service.service';
import { ActivatedRoute } from '@angular/router';
import { PaymentMode } from 'src/app/_models/payment_mode.model';

@Component({
  selector: 'app-property-edit',
  templateUrl: './property-edit.component.html',
  styleUrls: ['./property-edit.component.scss']
})
export class PropertyEditComponent implements OnInit {

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
    private formBuilder: FormBuilder,
    private route: ActivatedRoute    
  ) { 
    this.propertyForm = this.formBuilder.group({
      name: [''],
      property_type_id: [''],
      payment_mode_id: [''],
      amount: [''],
      start_date: [''],
      end_date: [''],
      floors: [''],
      client_id: [''],
      physical_address: [''],
      village_id: ['']
    });    
  }

  ngOnInit() {    
    this.getPropertyTypes();
    this.getPaymentModes();
    this.getAllClients();
    this.getRegions();
    this.getProperty();
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

  getProperty():void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.apiService.getProperty(id).subscribe((res: any) => {
      
      this.propertyForm.setValue({
        name: res.data.name,
        property_type_id: res.data.property_type_id,
        payment_mode_id: res.data.property_payment_mode.payment_mode_id,
        amount: res.data.property_payment_mode.amount,
        start_date: res.data.property_payment_mode.start_date,
        end_date: res.data.property_payment_mode.end_date,
        floors: res.data.floors,
        client_id: res.data.client_id,
        physical_address: res.data.physical_address,
        village_id: res.data.village_id,
      });
    })
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

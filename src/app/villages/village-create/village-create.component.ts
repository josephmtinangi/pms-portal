import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Region } from 'src/app/_models/region.model';
import { District } from 'src/app/_models/district.model';
import { Ward } from 'src/app/_models/ward.model';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-village-create',
  templateUrl: './village-create.component.html',
  styleUrls: ['./village-create.component.scss']
})
export class VillageCreateComponent implements OnInit {

  villageForm: FormGroup;
  submitted: boolean = false;
  success: boolean = false;
  errorMessage: string = null;
  regions: Array<Region> = [];
  districts: Array<District> = [];
  wards: Array<Ward> = [];

  constructor(
    private apiService: ApiServiceService,
    private formBuilder: FormBuilder    
  ) { }

  ngOnInit() {
    this.villageForm = this.formBuilder.group({
      name: [''],
      ward_id: ['']
    });
    
    this.getRegions();    
  }

  store(){
    this.submitted = true;

    if(this.villageForm.invalid){
      return;
    }

    this.apiService.storeVillage(this.villageForm.value).subscribe((res: any) => {
      this.success = true;
      this.submitted = false;
      this.villageForm.reset();
    },
    error => {
      this.success = false;
      this.submitted = false;
      this.errorMessage = error.message;
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

}

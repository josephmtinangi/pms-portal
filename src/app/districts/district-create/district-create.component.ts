import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Region } from 'src/app/_models/region.model';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-district-create',
  templateUrl: './district-create.component.html',
  styleUrls: ['./district-create.component.scss']
})
export class DistrictCreateComponent implements OnInit {

  districtForm: FormGroup;
  submitted: boolean = false;
  success: boolean = false;
  errorMessage: string = null;
  regions: Array<Region> = [];

  constructor(
    private apiService: ApiServiceService,
    private formBuilder: FormBuilder    
  ) { }

  ngOnInit() {
    this.districtForm = this.formBuilder.group({
      name: [''],
      region_id: ['']
    });
    
    this.getRegions();    
  }

  store(){
    this.submitted = true;

    if(this.districtForm.invalid){
      return;
    }

    this.apiService.storeDistrict(this.districtForm.value).subscribe((res: any) => {
      this.success = true;
      this.submitted = false;
      this.districtForm.reset();
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

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Region } from 'src/app/_models/region.model';
import { District } from 'src/app/_models/district.model';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-ward-create',
  templateUrl: './ward-create.component.html',
  styleUrls: ['./ward-create.component.scss']
})
export class WardCreateComponent implements OnInit {

  wardForm: FormGroup;
  submitted: boolean = false;
  success: boolean = false;
  errorMessage: string = null;
  regions: Array<Region> = [];
  districts: Array<District> = [];

  constructor(
    private apiService: ApiServiceService,
    private formBuilder: FormBuilder    
  ) { }

  ngOnInit() {
    this.wardForm = this.formBuilder.group({
      name: [''],
      district_id: ['']
    });
    
    this.getRegions();    
  }

  store(){
    this.submitted = true;

    if(this.wardForm.invalid){
      return;
    }

    this.apiService.storeWard(this.wardForm.value).subscribe((res: any) => {
      this.success = true;
      this.submitted = false;
      this.wardForm.reset();
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

}

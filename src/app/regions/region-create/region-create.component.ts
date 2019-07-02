import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-region-create',
  templateUrl: './region-create.component.html',
  styleUrls: ['./region-create.component.scss']
})
export class RegionCreateComponent implements OnInit {

  regionForm: FormGroup;
  submitted: boolean = false;
  success: boolean = false;
  errorMessage: string = null;
  states: Array<any> = [];

  constructor(
    private apiService: ApiServiceService,
    private formBuilder: FormBuilder    
  ) { }

  ngOnInit() {
    this.regionForm = this.formBuilder.group({
      name: [''],
      state: ['']
    });
    
    this.states = [
      { id: 1, name: 'TZ', code: 'tz' },
      { id: 2, name: 'ZNZ', code: 'znz' },
    ];
  }

  store(){
    this.submitted = true;

    if(this.regionForm.invalid){
      return;
    }

    this.apiService.storeRegion(this.regionForm.value).subscribe((res: any) => {
      this.success = true;
      this.submitted = false;
      this.regionForm.reset();
    },
    error => {
      this.success = false;
      this.submitted = false;
      this.errorMessage = error.message;
    });
  }

}

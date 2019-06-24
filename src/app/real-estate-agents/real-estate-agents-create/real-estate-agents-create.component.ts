import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-real-estate-agents-create',
  templateUrl: './real-estate-agents-create.component.html',
  styleUrls: ['./real-estate-agents-create.component.scss']
})
export class RealEstateAgentsCreateComponent implements OnInit {

  realEstateAgentForm: FormGroup;
  submitted: boolean = false;
  success: boolean = false;
  errorMessage: string = null;

  constructor(
    private apiService: ApiServiceService,
    private formBuilder: FormBuilder
  ) {
    this.realEstateAgentForm = this.formBuilder.group({
      name: [''],
      logo: [''],
      phone: [''],
      email: [''],
      physical_address: [''],
      postal_address: [''],
      account_name: [''],
      account_number: ['']
    });
   }

  ngOnInit() {
  }

  store(){
    this.submitted = true;

    if(this.realEstateAgentForm.invalid){
      return;
    }
    
    this.apiService.storeRealEstateAgent(this.realEstateAgentForm.value).subscribe((res: any) => {
      if(res.status == 200){
        this.success = true;
        this.submitted = false;
        this.realEstateAgentForm.reset();
      }
    },
    error => {
      this.success = false;
      this.submitted = false;
      if(error.status == 500){
        this.errorMessage = 'Something went wrong! Please try again.';
      }
    })    
  }

}

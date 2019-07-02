import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-customer-type-create',
  templateUrl: './customer-type-create.component.html',
  styleUrls: ['./customer-type-create.component.scss']
})
export class CustomerTypeCreateComponent implements OnInit {

  customerTypeForm: FormGroup;
  submitted: boolean = false;
  success: boolean = false;
  errorMessage: string = null;

  constructor(
    private apiService: ApiServiceService,
    private formBuilder: FormBuilder    
  ) { }

  ngOnInit() {
    this.customerTypeForm = this.formBuilder.group({
      name: [''],
      description: ['']
    });    
  }

  store(){
    this.submitted = true;

    if(this.customerTypeForm.invalid){
      return;
    }

    this.apiService.storeCustomerType(this.customerTypeForm.value).subscribe((res: any) => {
      this.success = true;
      this.submitted = false;
      this.customerTypeForm.reset();
    },
    error => {
      this.success = false;
      this.submitted = false;
      this.errorMessage = error.message;
    })
  }

}

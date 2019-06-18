import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiServiceService } from 'src/app/api-service.service';
import { CustomerType } from 'src/app/_models/customer_type.model';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.scss']
})
export class CustomerCreateComponent implements OnInit {

  customerForm: FormGroup;
  customer_types: Array<CustomerType> = [];
  submitted: boolean = false;
  success: boolean = false;
  errorMessage: string = null;

  constructor(
    private apiService: ApiServiceService,
    private formBuilder: FormBuilder
  ) { 
    this.customerForm = this.formBuilder.group({
      first_name: [''],
      middle_name: [''],
      last_name: [''],
      phone: [''],
      email: [''],
      tin: [''],
      customer_type_id: [''],
      postal_address: [''],
      physical_address: ['']
    });
  }

  ngOnInit() {
    this.apiService.getCustomerTypes().subscribe((res: any) => {
      this.customer_types = res.data;
    })
  }

  store(){
    this.submitted = true;

    if(this.customerForm.invalid){
      return;
    }

    this.apiService.storeCustomer(this.customerForm.value).subscribe((res: any) => {
      if(res.status == 200){
        this.success = true;
        this.submitted = false;
        this.customerForm.reset();
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

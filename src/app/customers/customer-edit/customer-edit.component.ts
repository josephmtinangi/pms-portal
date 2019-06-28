import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/_models/customer.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from 'src/app/api-service.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CustomerType } from 'src/app/_models/customer_type.model';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit {

  customer: Customer = new Customer;
  customerForm: FormGroup;
  customer_types: Array<CustomerType> = [];
  submitted: boolean = false;
  success: boolean = false;
  errorMessage: string = null;  

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private apiService: ApiServiceService,
    private formBuilder: FormBuilder
    ) { 
      this.customerForm = this.formBuilder.group({
        first_name: [this.customer.first_name],
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
    this.getCustomerTypes();
    this.getCustomer();
  }

  update():void {

    this.submitted = true;

    if(this.customerForm.invalid){
      return;
    }

    const id = +this.route.snapshot.paramMap.get('id');
    this.apiService.updateCustomer(id, this.customerForm.value).subscribe((res: any) => {
      if(res.status == 200){
        this.success = true;
        this.submitted = false;
        this.customerForm.reset();

        this.router.navigate(['/customers']);
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

  getCustomer(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.apiService.getCustomer(id).subscribe((res: any) => {
      this.customer = res.data;
    });
  }  

  getCustomerTypes(){
    this.apiService.getCustomerTypes().subscribe((res: any) => {
      this.customer_types = res.data;
    })    
  } 

}

import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/_models/customer.model';
import { ApiServiceService } from 'src/app/api-service.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BillType } from 'src/app/_models/bill_type.model';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {

  billForm: FormGroup;
  billTypes: Array<BillType> = [];
  submitted: boolean = false;
  success: boolean = false;
  errorMessage: string = null;  
  customer: Customer;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiServiceService,
    private formBuilder: FormBuilder
    ) { 
      this.billForm = this.formBuilder.group({
        customer_id: [''],
        amount: [''],
        bill_type_id: [''],
        start_date: [''],
        end_date: ['']
      });      
    }

  ngOnInit() {
    this.getCustomer();
    this.getBillTypes();
  }

  storeBill() {

    this.submitted = true;

    if(this.billForm.invalid){
      return;
    }

    this.apiService.generateControlNumber(this.billForm.value).subscribe((res: any) => {
      if(res.status == 200){
        this.success = true;
        this.submitted = false;
        this.billForm.reset();
      }
    },
    error => {
      this.success = false;
      this.submitted = false;
      this.errorMessage = error.message;
    })
  }

  getCustomer(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.apiService.getCustomer(id).subscribe((res: any) => {
      this.customer = res.data;
    });
  }

  getBillTypes() {
    this.apiService.getBillTypes().subscribe((res: any) => {
      this.billTypes = res.data;
    })
  }

}

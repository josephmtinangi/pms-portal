import { Component, OnInit } from '@angular/core';
import { CustomerPayment } from '../_models/customer_payment.model';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-customer-payments',
  templateUrl: './customer-payments.component.html',
  styleUrls: ['./customer-payments.component.scss']
})
export class CustomerPaymentsComponent implements OnInit {

  customerPayments: Array<CustomerPayment> = [];

  constructor(private apiService: ApiServiceService) { }

  ngOnInit() {
    this.getCustomerPayments();
  }

  getCustomerPayments(){
    this.apiService.getCustomerPayments().subscribe((res: any) => {
      this.customerPayments = res.data.data;
    })
  }

}

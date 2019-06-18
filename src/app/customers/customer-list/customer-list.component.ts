import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';
import { Customer } from 'src/app/_models/customer.model';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  customers: Array<Customer> = [];

  constructor(
    private apiService: ApiServiceService
  ) { }

  ngOnInit() {
    this.apiService.getCustomers().subscribe((res: any) => {
      this.customers = res.data.data;
    },
    error => {
      console.log(error);
    });
  }

}

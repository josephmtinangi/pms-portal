import { Component, OnInit } from '@angular/core';
import { CustomerType } from 'src/app/_models/customer_type.model';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-customer-type-list',
  templateUrl: './customer-type-list.component.html',
  styleUrls: ['./customer-type-list.component.scss']
})
export class CustomerTypeListComponent implements OnInit {

  customerTypes: Array<CustomerType> = [];

  constructor(private apiService: ApiServiceService) { }

  ngOnInit() {
    this.getPropertyTypes();
  }

  getPropertyTypes(){
    this.apiService.getCustomerTypes().subscribe((res: any) => {
      this.customerTypes = res.data;
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/_models/customer.model';
import { ApiServiceService } from 'src/app/api-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {

  customer: Customer = null;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiServiceService
    ) { }

  ngOnInit() {
    this.getCustomer();
  }

  getCustomer(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.apiService.getCustomer(id).subscribe((res: any) => {
      this.customer = res.data;
    });
  }

}

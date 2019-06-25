import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Invoice } from 'src/app/_models/invoice.model';
import { ApiServiceService } from 'src/app/api-service.service';
import { RealEstateAgent } from 'src/app/_models/real_estate_agent.model';
import { Customer } from 'src/app/_models/customer.model';

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.scss']
})
export class InvoiceDetailComponent implements OnInit {

  invoice: Invoice;
  agent: RealEstateAgent;
  customer: Customer;
  customerContract: any;
  customerPaymentSchedule: any;

  constructor(private route: ActivatedRoute, private apiService: ApiServiceService) { }

  ngOnInit() {
    this.getInvoice();
  }

  getInvoice():void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.apiService.getInvoice(id).subscribe((res: any) => {
      this.invoice = res.data.invoice;
      this.agent = res.data.agent;
      this.customerContract = res.data.customerContract;
      this.customer = res.data.customerContract.customer;
      this.customerPaymentSchedule = res.data.customerPaymentSchedule;
    });
  }

}

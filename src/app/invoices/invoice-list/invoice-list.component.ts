import { Component, OnInit } from '@angular/core';
import { Invoice } from 'src/app/_models/invoice.model';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent implements OnInit {

  invoices: Array<Invoice> = [];

  constructor(private apiService: ApiServiceService) { }

  ngOnInit() {
    this.getInvoices()
  }

  getInvoices():void {
    this.apiService.getInvoices().subscribe((res: any) => {
      this.invoices = res.data.data;
    })
  }

}

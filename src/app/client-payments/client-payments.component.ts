import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { ClientPayment } from '../_models/client_payment.model';

@Component({
  selector: 'app-client-payments',
  templateUrl: './client-payments.component.html',
  styleUrls: ['./client-payments.component.scss']
})
export class ClientPaymentsComponent implements OnInit {

  clientPayments: Array<ClientPayment> = [];

  constructor(private apiService: ApiServiceService) { }

  ngOnInit() {
    this.getClientPayments();
  }

  getClientPayments(){
    this.apiService.getClientPayments().subscribe((res: any) => {
      this.clientPayments = res.data.data;
    })
  }  

}

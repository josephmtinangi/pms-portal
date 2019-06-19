import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';
import { Client } from 'src/app/_models/client.model';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {

  clients: Array<Client> = [];

  constructor(private apiService: ApiServiceService) { }

  ngOnInit() {
    this.apiService.getClients().subscribe((res: any) => {
      this.clients = res.data.data;
    })
  }

}

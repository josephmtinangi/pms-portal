import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';
import { ClientType } from 'src/app/_models/client_type.model';

@Component({
  selector: 'app-client-type-list',
  templateUrl: './client-type-list.component.html',
  styleUrls: ['./client-type-list.component.scss']
})
export class ClientTypeListComponent implements OnInit {

  clientTypes: Array<ClientType> = [];

  constructor(private apiService: ApiServiceService) { }

  ngOnInit() {
    this.getClientTypes();
  }

  getClientTypes(){
    this.apiService.getClientTypes().subscribe((res: any) => {
      this.clientTypes = res.data;
    })
  }

}

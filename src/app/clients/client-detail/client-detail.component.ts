import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';
import { Client } from 'src/app/_models/client.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.scss']
})
export class ClientDetailComponent implements OnInit {

  client: Client;

  constructor(private apiService: ApiServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getClient();
  }

  getClient(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.apiService.getClient(id).subscribe((res: any) => {
      this.client = res.data;
    })
  }

}

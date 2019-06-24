import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from 'src/app/api-service.service';
import { Lease } from 'src/app/_models/lease.model';

@Component({
  selector: 'app-lease-detail',
  templateUrl: './lease-detail.component.html',
  styleUrls: ['./lease-detail.component.scss']
})
export class LeaseDetailComponent implements OnInit {

  lease: Lease;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiServiceService
  ) { }

  ngOnInit() {
    this.getLease();
  }

  getLease(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.apiService.getLease(id).subscribe((res: any) => {
      this.lease = res.data;
    })
  }

}

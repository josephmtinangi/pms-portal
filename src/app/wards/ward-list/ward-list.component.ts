import { Component, OnInit } from '@angular/core';
import { Ward } from 'src/app/_models/ward.model';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-ward-list',
  templateUrl: './ward-list.component.html',
  styleUrls: ['./ward-list.component.scss']
})
export class WardListComponent implements OnInit {

  wards: Array<Ward> = [];

  constructor(private apiService: ApiServiceService) { }

  ngOnInit() {
    this.getWards()
  }

  getWards(){
    this.apiService.getWards().subscribe((res: any) => {
      this.wards = res.data;
    })
  }

}

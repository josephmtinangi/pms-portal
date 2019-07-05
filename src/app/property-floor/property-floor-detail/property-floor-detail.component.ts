import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-floor-detail',
  templateUrl: './property-floor-detail.component.html',
  styleUrls: ['./property-floor-detail.component.scss']
})
export class PropertyFloorDetailComponent implements OnInit {

  floor: any;

  constructor(private apiService: ApiServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getPropertyFloor();
  }

  getPropertyFloor() {
    const propertyId = +this.route.snapshot.paramMap.get('propertyId');
    const floor = +this.route.snapshot.paramMap.get('floor');

    this.apiService.getPropertyFloor(propertyId, floor).subscribe((res: any) => {
      this.floor = res.data;
    })
  }

}

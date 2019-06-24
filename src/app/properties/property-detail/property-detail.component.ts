import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';
import { Property } from 'src/app/_models/property.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.scss']
})
export class PropertyDetailComponent implements OnInit {

  property: Property;

  constructor(private apiService: ApiServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  getProperty():void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.apiService.getProperty(id).subscribe((res: any) => {
      this.property = res.data;
    })
  }

}

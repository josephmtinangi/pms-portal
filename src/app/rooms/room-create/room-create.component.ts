import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/_models/property.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-room-create',
  templateUrl: './room-create.component.html',
  styleUrls: ['./room-create.component.scss']
})
export class RoomCreateComponent implements OnInit {

  roomForm: FormGroup;
  properties: Array<Property> = [];
  submitted: boolean = false;
  success: boolean = false;
  errorMessage: string = null;  

  constructor(
    private apiService: ApiServiceService,
    private formBuilder: FormBuilder    
  ) {
    this.roomForm = this.formBuilder.group({
      property_id: [''],
      number: [''],
      floor: [''],
      metrics: [''],
      size: [''],
      price_per_sqm: ['']
    });    
   }

  ngOnInit() {
    this.getProperties();
  }

  store(){
    this.submitted = true;

    if(this.roomForm.invalid){
      return;
    }

    this.apiService.storeRoom(this.roomForm.value).subscribe((res: any) => {
      if(res.status == 200){
        this.success = true;
        this.submitted = false;
        this.roomForm.reset();
      }
    },
    error => {
      this.success = false;
      this.submitted = false;
      this.errorMessage = 'Something went wrong! Please try again.';
    })    
  }

  getProperties() {
    this.apiService.getAllProperties().subscribe((res: any) => {
      this.properties = res.data;
    });
  }

}

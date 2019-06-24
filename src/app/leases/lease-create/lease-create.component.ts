import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiServiceService } from 'src/app/api-service.service';
import { Customer } from 'src/app/_models/customer.model';
import { Property } from 'src/app/_models/property.model';
import { Room } from 'src/app/_models/room.models';

@Component({
  selector: 'app-lease-create',
  templateUrl: './lease-create.component.html',
  styleUrls: ['./lease-create.component.scss']
})
export class LeaseCreateComponent implements OnInit {

  leaseForm: FormGroup;
  submitted: boolean = false;
  success: boolean = false;

  customers: Array<Customer> = [];
  properties: Array<Property> = [];
  rooms: Array<Room> = [];

  constructor(private apiService: ApiServiceService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.leaseForm = this.formBuilder.group({
      customer_id: [''],
      property_id: [''],
      start_date: [''],
      end_date: [''],
      rent_per_month: [''],
      payment_interval: [''],
      contract_duration: [''],
      roomsIds: ['']
    });

    this.getAllCustomers();
    this.getAllProperties();
    this.getPropertyRooms(6);
  }

  store(){
    this.submitted = true;    

    if(this.leaseForm.invalid){
      return;
    }

    this.apiService.storeLease(this.leaseForm.value).subscribe((res: any) => {
      if(res.status == 200){
        this.success = true;
        this.submitted = false;
        this.leaseForm.reset();
      }
    },
    error => {
      this.success = false;
      this.submitted = false;
      console.log(error.message);
    });
  }

  getAllProperties(){
    this.apiService.getAllProperties().subscribe((res: any) => {
      this.properties = res.data;
    })
  }

  getAllCustomers(){
    this.apiService.getAllCustomers().subscribe((res: any) => {
      this.customers = res.data;
    })
  }

  getPropertyRooms(id: number){
    this.apiService.getPropertyRooms(id).subscribe((res: any) => {
      this.rooms = res.data;
    })
  }

}

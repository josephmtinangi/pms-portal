import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
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
  errorMessage: string = null;

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
      rooms: new FormArray([]),
    });

    this.addCheckboxes();

    this.getAllCustomers();
    this.getAllProperties();
  }

  private addCheckboxes() {
    this.apiService.getPropertyRooms(1).subscribe((res: any) => {
      this.rooms = res.data;

      this.rooms.map((r, i) => {
        const control = new FormControl(); // if first item set to true, else false
        (this.leaseForm.controls.rooms as FormArray).push(control);
      });      
    });
  }  

  store(){
    console.log('submitted');

    const selectedRoomIds = this.leaseForm.value.rooms
      .map((v, i) => v ? this.rooms[i].id : null)
      .filter(v => v !== null);

    this.leaseForm.value.rooms = selectedRoomIds;
      
    this.submitted = true;    

    if(this.leaseForm.invalid){
      return;
    }

    this.apiService.storeLease(this.leaseForm.value).subscribe((res: any) => {
      console.log('lease res ');
      console.log(res);
      this.success = true;
      this.submitted = false;
      this.leaseForm.reset();

      console.log('generate cn')
      this.apiService.generateControlNumber({customer_contract_id: res.data.id}).subscribe((res: any) => {
        console.log('done generating')
        console.log(res);
      });
    },
    error => {
      this.success = false;
      this.submitted = false;
      this.errorMessage = error.message;
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

}

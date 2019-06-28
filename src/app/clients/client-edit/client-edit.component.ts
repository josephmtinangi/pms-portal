import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ClientType } from 'src/app/_models/client_type.model';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.scss']
})
export class ClientEditComponent implements OnInit {

  clientForm: FormGroup;
  client_types: Array<ClientType> = [];
  submitted: boolean = false;
  success: boolean = false;
  errorMessage: string = null;

  constructor(
    private apiService: ApiServiceService,
    private formBuilder: FormBuilder
  ) {
    this.clientForm = this.formBuilder.group({
      first_name: [''],
      middle_name: [''],
      last_name: [''],
      phone: [''],
      email: [''],
      photo: [''],
      physical_address: [''],
      postal_address: [''],
      tin: [''],
      client_type_id: [''],
      account_name: [''],
      account_number: ['']
    });
   }

  ngOnInit() {
    this.getClientTypes();
  }

  getClientTypes(){
    this.apiService.getClientTypes().subscribe((data: any) => {
      this.client_types = data.data;
    });
  }

}

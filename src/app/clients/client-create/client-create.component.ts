import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiServiceService } from 'src/app/api-service.service';
import { ClientType } from 'src/app/_models/client_type.model';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.scss']
})
export class ClientCreateComponent implements OnInit {

  clientForm: FormGroup;
  client_types: Array<ClientType> = [];
  submitted: boolean = false;
  success: boolean = false;
  errorMessage: string = '';

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
      client_type_id: ['']
    });
  }

  ngOnInit() {
    this.apiService.getClientTypes().subscribe((data: any) => {
      this.client_types = data.data;
    })
  }

  store(){
    this.submitted = true;

    if(this.clientForm.invalid){
      return;
    }

    this.apiService.storeClient(this.clientForm.value).subscribe((res: any) => {
      if(res.status == 200){
        this.success = true;
        this.submitted = false;
      }
    },
    error => {
      this.success = false;
      this.submitted = false;
      console.log(error.message);
    });

  }

}

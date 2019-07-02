import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-client-type-create',
  templateUrl: './client-type-create.component.html',
  styleUrls: ['./client-type-create.component.scss']
})
export class ClientTypeCreateComponent implements OnInit {

  clientTypeForm: FormGroup;
  submitted: boolean = false;
  success: boolean = false;
  errorMessage: string = null;

  constructor(
    private apiService: ApiServiceService,
    private formBuilder: FormBuilder    
  ) { }

  ngOnInit() {
    this.clientTypeForm = this.formBuilder.group({
      name: [''],
      description: ['']
    });    
  }

  store(){
    this.submitted = true;

    if(this.clientTypeForm.invalid){
      return;
    }

    this.apiService.storeClientType(this.clientTypeForm.value).subscribe((res: any) => {
      this.success = true;
      this.submitted = false;
      this.clientTypeForm.reset();
    },
    error => {
      this.success = false;
      this.submitted = false;
      this.errorMessage = error.message;
    })
  }  

}

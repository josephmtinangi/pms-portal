import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-property-type-create',
  templateUrl: './property-type-create.component.html',
  styleUrls: ['./property-type-create.component.scss']
})
export class PropertyTypeCreateComponent implements OnInit {

  propertyTypeForm: FormGroup;
  submitted: boolean = false;
  success: boolean = false;
  errorMessage: string = null;

  constructor(
    private apiService: ApiServiceService,
    private formBuilder: FormBuilder    
  ) { }

  ngOnInit() {
    this.propertyTypeForm = this.formBuilder.group({
      name: [''],
      description: ['']
    });    
  }

  store(){
    this.submitted = true;

    if(this.propertyTypeForm.invalid){
      return;
    }

    this.apiService.storePropertyType(this.propertyTypeForm.value).subscribe((res: any) => {
      this.success = true;
      this.submitted = false;
      this.propertyTypeForm.reset();
    },
    error => {
      this.success = false;
      this.submitted = false;
      this.errorMessage = error.message;
    })
  }  

}

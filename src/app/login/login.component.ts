import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted: boolean = false;
  errorMessage: string = null;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
   }

  ngOnInit() {
    if(this.authService.isAuthenticated()){
      console.log('is auth');
      this.router.navigate(['/']);
    }else{
      console.log('is not auth');
    }
  }

  login() {
    this.submitted = true;
    this.errorMessage = null;
    if(this.loginForm.valid){
      this.authService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe((res: any) => {
        if(res.status == 200){
          this.authService.store(res);
          this.router.navigate(['/']);
        }
      },
      error => {
        this.submitted = false;
        this.errorMessage = error.error.message;
      })
    }
  }

}

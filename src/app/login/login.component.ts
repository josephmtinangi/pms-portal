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

    if(this.loginForm.valid){
      this.authService.login(this.loginForm.value.email, this.loginForm.value.password);
    }
  }

}

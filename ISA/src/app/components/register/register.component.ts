import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/service/userService/user-service.service';
// import { SignupRequestPayload } from './register-request.payload';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // signupRequest: SignupRequestPayload;
  signupForm!: FormGroup;
  isExist: boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      
    })
  }

  signUp(){
    
  }
  
}

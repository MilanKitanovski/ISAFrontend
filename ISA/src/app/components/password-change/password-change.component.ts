import { HttpStatusCode } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Password } from 'src/app/model/password';
import { User } from 'src/app/model/user';
import { UserServiceService } from 'src/app/service/userService/user-service.service';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.css']
})
export class PasswordChangeComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private userService: UserServiceService,
    private router: Router) { }

 
  urlIDParam!: string | null;
  changePasswordForm!: FormGroup;

  id!: number
  error: boolean = false;
  passwordError: boolean = false;
  password: Password = {
    userId: 0,
    oldPassword: '',
    newPassword1: '',
    newPassword2: ''
  }
  httpStatus!: HttpStatusCode;


  ngOnInit(): void {
    this.changePasswordForm = new FormGroup({
      oldPassword: new FormControl('', Validators.required),
      newPassword1: new FormControl('', Validators.required),
      newPassword2: new FormControl('', Validators.required)
    })

     }

  changePasswordF(){
    console.log(this.changePasswordForm.get("newPassword1")?.value)
    console.log(this.changePasswordForm.get("newPassword2")?.value)
    if(this.changePasswordForm.get("newPassword1")?.value != this.changePasswordForm.get("newPassword2")?.value){
      alert('Sifre nisu jednake')

      return;
    }
    
    this.userService.changePassword({
      oldPassword : this.changePasswordForm.get("oldPassword")?.value,
      newPassword : this.changePasswordForm.get("newPassword1")?.value
    }).subscribe((response: Password) => {
      console.log(response)
      
    },
    (status: HttpStatusCode) => {
      if(HttpStatusCode.NotFound){
        this.passwordError = true
      }
    })

  }


}

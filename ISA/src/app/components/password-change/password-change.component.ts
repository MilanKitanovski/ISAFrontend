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

  user!: User;
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

  //   this.urlIDParam = this.route.snapshot.paramMap.get('id');
  //   if(this.urlIDParam != null){
  //     this.id =+ this.urlIDParam;
  //     this.userService.getOneUser(this.id).subscribe((response: User) =>{
  //       this.user = response;
  //     },
  //     error => {
  //       this.router.navigate(["error"])
  //     })
  //   }
     }

  changePasswordF(){
    this.password.userId = this.user.id;
    this.password.oldPassword = this.changePasswordForm.get("oldPassword")?.value;
    this.password.newPassword1 = this.changePasswordForm.get("newPassword1")?.value;
    this.password.newPassword2 = this.changePasswordForm.get("newPassword2")?.value;
    this.userService.changePassword(this.password).subscribe((response: Password) => {
      console.log(response)
      this.router.navigate(["info"]);
    },
    (status: HttpStatusCode) => {
      if(HttpStatusCode.NotFound){
        this.passwordError = true
      }
    })

  }

}

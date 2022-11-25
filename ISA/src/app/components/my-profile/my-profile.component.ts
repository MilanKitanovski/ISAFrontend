import { HttpStatusCode } from '@angular/common/http';
import { Component, createPlatform, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { TokenServiceService } from 'src/app/service/tokenService/token-service.service';
import { UserServiceService } from 'src/app/service/userService/user-service.service';


@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  token!: string | null;
  user : User = {
    id: 0,
    name: '',
    surname: '',
    email: '',
    password: '',
    address: '',
    city: '',
    country: '',
    mobile: '',
    uniquePersonalId: '',
    profession: '',
    gender: '',
    centreId: 0,
    userType: '',
    information: ''
  };


  constructor(
    private tokenService: TokenServiceService,
    private router: Router,
    private userService: UserServiceService
  ) { }

  changeInfoForm!: FormGroup
  successfully : boolean = false;
  email: string | null = localStorage.getItem("email")


  
  ngOnInit(): void {

    this.changeInfoForm = new FormGroup({
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      mobile: new FormControl('', Validators.required),
      uniquePersonalId: new FormControl('', Validators.required),
      profession: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      centreId: new FormControl('', Validators.required),
      userType: new FormControl('', Validators.required),
      information: new FormControl('', Validators.required)
  })

    this.userService.getCurrentUser().subscribe(response => {
      this.user = response;
      //   this.changeInfoForm = new FormGroup({
      //     name: new FormControl(response.name, Validators.required),
      //     surname: new FormControl(response.surname, Validators.required),
      //     address: new FormControl(response.address, Validators.required),
      //     city: new FormControl(response.city, Validators.required),
      //     country: new FormControl(response.country, Validators.required),
      //     mobile: new FormControl(response.mobile, Validators.required),
      //     uniquePersonalId: new FormControl(response.uniquePersonalId, Validators.required),
      //     profession: new FormControl(response.profession, Validators.required),
      //     gender: new FormControl(response.gender, Validators.required),
      //     centreId: new FormControl(response.centreId, Validators.required),
      //     userType: new FormControl(response.userType, Validators.required),
      //     information: new FormControl(response.information, Validators.required)
          
      // })

      this.changeInfoForm.controls['name'].setValue(response.name);
      this.changeInfoForm.controls['surname'].setValue(response.surname);
      this.changeInfoForm.controls['address'].setValue(response.address);
      this.changeInfoForm.controls['city'].setValue(response.city);
      this.changeInfoForm.controls['country'].setValue(response.country);
      this.changeInfoForm.controls['mobile'].setValue(response.mobile);
      this.changeInfoForm.controls['uniquePersonalId'].setValue(response.uniquePersonalId);
      this.changeInfoForm.controls['profession'].setValue(response.profession);
      this.changeInfoForm.controls['gender'].setValue(response.gender);
      // this.changeInfoForm.controls['centerId'].setValue(response.centreId);
      this.changeInfoForm.controls['userType'].setValue(response.userType);
      this.changeInfoForm.controls['information'].setValue(response.information);

      console.log(response)

    })

    // this.email = localStorage.getItem("email");
    // this.userService.getOneUser(localStorage.getItem("email")).subscribe((response: User) => {
    //   this.user = response;

    //   this.changeInfoForm = new FormGroup({
    //     name: new FormControl(this.user.name, Validators.required),
    //     surname: new FormControl(this.user.surname, Validators.required),
    //     //email: new FormControl(this.user.email, Validators.required),
    //     //password: new FormControl(this.user.password, Validators.required),
    //     address: new FormControl(this.user.address, Validators.required),
    //     city: new FormControl(this.user.city, Validators.required),
    //     country: new FormControl(this.user.country, Validators.required),
    //     mobile: new FormControl(this.user.mobile, Validators.required),
    //     uniquePersonalId: new FormControl(this.user.uniquePersonalId, Validators.required),
    //     profession: new FormControl(this.user.profession, Validators.required),
    //     gender: new FormControl(this.user.gender, Validators.required),
    //     centreId: new FormControl(this.user.centreId, Validators.required),
    //     userType: new FormControl(this.user.userType, Validators.required),
    //     information: new FormControl(this.user.information, Validators.required)
    //   })
    // })
  }

  passwordChange(userID: number){
    this.router.navigate(['/password-change',userID])
  }

  changeInfo() {
    console.log(this.user)
   this.user.name = this.changeInfoForm.get("name")?.value;
   this.user.surname = this.changeInfoForm.get("surname")?.value;
   //this.user.email = this.changeInfoForm.get("email")?.value;
  //  this.user.password = this.changeInfoForm.get("password")?.value;
   this.user.address = this.changeInfoForm.get("address")?.value;
   this.user.city = this.changeInfoForm.get("city")?.value;
   this.user.country = this.changeInfoForm.get("country")?.value;
   this.user.mobile = this.changeInfoForm.get("mobile")?.value;
   this.user.uniquePersonalId = this.changeInfoForm.get("uniquePersonalId")?.value;
   this.user.profession = this.changeInfoForm.get("profession")?.value;
   this.user.gender = this.changeInfoForm.get("gender")?.value;
   this.user.centreId = this.changeInfoForm.get("centreId")?.value;
   this.user.userType = this.changeInfoForm.get("userType")?.value;
   this.user.information = this.changeInfoForm.get("information")?.value;

   this.userService.changeUser(this.user).subscribe((response: HttpStatusCode) => {
    if(HttpStatusCode.Ok){
      this.successfully = true
    }
   })

  }

  
}

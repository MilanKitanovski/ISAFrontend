import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  constructor(
    private router: Router
  ) { }
  

  ngOnInit(): void {
   
  }

  login(){
    localStorage.setItem("token", "true")
    this.router.navigate(['/my-profile'])
  }

  onChange(event:any){
    
  }
}

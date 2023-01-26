import { Component, OnInit } from '@angular/core';
import {AppointmentService} from "../../service/appointment.service";
import {Appointment} from "../../model/appointment";
import {formatDate} from "@angular/common";
import {Sort} from "@angular/material/sort";
import {compareNumbers} from "@angular/compiler-cli/src/version_helpers";
import {bootstrapApplication} from "@angular/platform-browser";
import {ReservationService} from "../../service/reservation.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import decode from "jwt-decode";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  sixMounth: boolean = false;

  appointments : Appointment[] = [];
  pickerDate : Date = new Date();
  startTimePicked : string = "";
  endTimePicked : string = "";

  token : string = "";
  tokenPayload : any | undefined;

  isAdmin = false;

  constructor(private appointmentService : AppointmentService,
              private reservationService: ReservationService,
              private snackBar: MatSnackBar
               ) { }

  ngOnInit(): void {
    this.token = localStorage.getItem("token")!;
    this.tokenPayload = decode(this.token);
    if(this.tokenPayload.role == "CenterAdministrator"){
      this.isAdmin = true;
    }
  }

  findAppointment() {
    const ds = formatDate(this.pickerDate, 'yyyy-MM-dd', 'en_us'); //data string
    this.appointmentService.getAllAppointmentBetweenDates(ds, this.startTimePicked, this.endTimePicked, false).subscribe({
      next : (value) => {
        this.appointments = value;
      }
    });
  }

  format(dateAndTime: Date) {
    return formatDate(dateAndTime,'yyyy-MM-dd HH:mm', "en_us");
  }

  sortData(data: Sort) {
    let isAsc = false;
    if(data.direction == "asc"){
      isAsc = true;
    }

    this.appointments = this.appointments.sort((a, b) => {
      return this.compare(a.centre.avgGrade, b.centre.avgGrade, isAsc);
    })
  }

  compare(a: number, b: number, isAsc:boolean){
    return (a<b?-1:1)*(isAsc?1:-1); //if(a<b) return -1...
  }

  saveSchedule(appointment:Appointment){
    this.reservationService.isPastSixMonth(1).subscribe({next:(value)=>{
        this.sixMounth = value;
    if(this.sixMounth){
      this.reservationService.save(appointment).subscribe();
    }else{
      this.snackBar.open("Mora da prodje 6 meseci od poslednjeg davanja krvi", "Close", {duration:5000})
    }
      }});
  }
}

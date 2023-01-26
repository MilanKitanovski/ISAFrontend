import { Component, OnInit } from '@angular/core';
import {Centre} from "../../model/centre";
import {CentreService} from "../../service/centreService/centre.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Appointment} from "../../model/appointment";
import {AppointmentService} from "../../service/appointment.service";
import {formatDate} from "@angular/common";
// import {format} from "date-fns"

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  pickerDate = new Date();
  startDate: Date = new Date();
  endDate: Date = new Date();
  center: Centre = {
    centreId: 0,
    name: "",
    address: "",
    avgGrade: 0,
    longitude: 0,
    latitude: 0,
    description: "",
    centreGradeId: 0,
    startWork: new Date(),
    endWork:  new Date()      // formatDate(new Date(), "HH:mm", 'en_us')
  }

  appointments : Appointment[] = []

  appointment : Appointment = {
    id: 0,
    centre: this.center,
    dateAndTime : new Date(),
    duration: 0
  }
  centers: Centre[] = [];
  time = "";
  duration = 0;
  constructor(private centreService: CentreService,
              private _snackBar : MatSnackBar,
              private  appointmentService: AppointmentService)
  { }

  ngOnInit(): void {

    this.getAppointment();

    this.centreService.getAllCentres().subscribe({
       next:(result) => {
        this.centers = result;
      },
      error: err => {
        this._snackBar.open(err,"Close", {
          duration:5000
        })
       }
      }

    )
  }

  getAppointment(){
    this.appointmentService.getAllAppointment().subscribe({
      next:(result) => {
        this.appointments = result;
      },
      error: err => {
        this._snackBar.open(err,"Close", {
          duration:5000
        })
      }
    })
  }

  save(center:Centre) {
    this.startDate = new Date(this.center.startWork);
    this.endDate = new Date(this.center.endWork);
    this.startDate.setFullYear(this.pickerDate.getFullYear(), this.pickerDate.getMonth(), this.pickerDate.getDate());
    this.endDate.setFullYear(this.pickerDate.getFullYear(), this.pickerDate.getMonth(), this.pickerDate.getDate());

    if(this.pickerDate.getTime() >= this.startDate.getTime() && this.pickerDate.getTime() <= this.endDate.getTime()){
      this.appointment.centre = this.center;
      this.appointment.duration = this.duration;
      this.appointment.dateAndTime = this.pickerDate;


      this.appointmentService.saveAppointment(this.appointment).subscribe({
        complete: () => {
          this.getAppointment();
        }
      });

    }else{
      this._snackBar.open("Morate izabrati termin unutar radnog vremena ustanove" + formatDate(this.center.startWork, "MM:hh","en_us")
        + " do " + formatDate(this.center.endWork, "MM:hh","en_us"),  "Close",
        {duration: 5000})

    }
  }

  format(dateAndTime: Date) {
    return formatDate(dateAndTime,'yyyy-MM-dd HH:mm', "en_us");
  }
}

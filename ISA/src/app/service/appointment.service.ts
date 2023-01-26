import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Appointment} from "../model/appointment";
import {catchError, Observable} from "rxjs";
import {Centre} from "../model/centre";
import {formatDate} from "@angular/common";

const httpOption = {
  headers: new Headers({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    "Authorization": "Bearer " + localStorage.getItem("token")
  })
}
const h = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  "Authorization": "Bearer " + localStorage.getItem("token")
}

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  apiHost: string = 'http://localhost:8080/api/';


  constructor(private http: HttpClient) {
  }

  saveAppointment(appointment: Appointment) {
    return this.http.post(this.apiHost + "appointment", appointment, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    });
  }

  getAllAppointment(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(this.apiHost + "appointment", {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    });
  }

  getAllAppointmentBetweenDates(date: string, startTime: string, endTime: string, b:boolean): Observable<Appointment[]> {
    const startTimeD = formatDate(date + ' ' + startTime, 'yyyy-MM-dd HH:mm', 'en_us');
    const endTimeD = formatDate(date + ' ' + endTime, 'yyyy-MM-dd HH:mm', 'en_us');
    console.log(startTimeD);
    console.log(endTimeD);
    return this.http.get<Appointment[]>(this.apiHost + "appointment/" + startTimeD + "/" + endTimeD + "/" + b, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        "Authorization": "Bearer " + localStorage.getItem("token")
      }

    });
  }
}

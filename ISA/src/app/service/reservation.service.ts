import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Reservation} from "../model/reservation";
import {ReservationComponent} from "../components/reservation/reservation.component";
import {Appointment} from "../model/appointment";
import decode from "jwt-decode";
import {ReservationRequest} from "../model/reservation-request";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  Url = "http://localhost:8080/api/reservation"
  reservationRequest : ReservationRequest = {
    userEmail:"",
    appointmentId:0
  }
  constructor(private Http: HttpClient) { }

  findAllReservationByUser(id:number) : Observable<Reservation[]> {
    return this.Http.get<Reservation[]>(this.Url, {params:{id:id},  headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        "Authorization": "Bearer " + localStorage.getItem("token")
      }})
  }

  isPastSixMonth(id:number) : Observable<boolean>{
    return this.Http.get<boolean>(this.Url+"/"+id, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    });
  }

  save(appointment:Appointment) : Observable<Reservation>{
    this.reservationRequest.appointmentId = appointment.id;
    this.reservationRequest.userEmail = this.getEmailForToken();
    return this.Http.post<Reservation>(this.Url, this.reservationRequest, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    });
  }

  getEmailForToken() {
    const token = localStorage.getItem("token")
    if (typeof token === "string") {
      const tokenPayload: any = decode(token);
      return tokenPayload.sub;
    }
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Centre } from 'src/app/model/centre';
import { CentreSearchRequest } from 'src/app/model/CentreSearchRequest';

@Injectable({
  providedIn: 'root'
})
export class CentreService {

  apiHost: string = 'http://localhost:8080/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }


  getAllCentres(): Observable<any[]> {
    return this.http.get<Centre[]>(this.apiHost + 'api/centres/getCentres', {headers: this.headers});
  }

  searchAllCentres(dto:CentreSearchRequest): Observable<any[]> {
    return this.http.post<Centre[]>(this.apiHost + 'api/centres/searchCentre/',dto,{headers: this.headers});
  }

  searchCentres(dto:CentreSearchRequest): Observable<any> {
    return this.http.post<Centre>(this.apiHost + 'api/centres/searchCentres/'+dto.centerId,dto,{headers: this.headers});
  }
}

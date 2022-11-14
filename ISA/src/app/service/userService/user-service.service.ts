import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpClient: HttpClient) { }


  singUp(user: User): Observable<any> {
    return this.httpClient.post('http://localhost:8080/users/', user, { responseType: 'text' });
  }

  signIn(user: User): Observable<any> {
    return this.httpClient.post('http://localhost:8080/users/login', user, { responseType: 'text' });
  }

  changeUser(user: User): Observable<any>{
    let headers = new HttpHeaders({ 
      "Content-Type" : "application/json",
      "Authorization" : "Bearer " + localStorage.getItem("token"), //autorizacija
    });
    let options = {headers:headers};
    return this.httpClient.put('http://localhost:8080/users/' + user.id, user, options);
  }

  // changePassword(passwordChange: Password): Observable<any>{
  //   let headers = new HttpHeaders({
  //     "Content-Type" : "application/json",
  //     "Authorization" : "Bearer " + localStorage.getItem("token"),
  //   });
  //   let options = {headers:headers};
  //   return this.httpClient.put('http://localhost:8080/users/'+ passwordChange.userId + '/passwordChange', passwordChange, options);
  // }
}

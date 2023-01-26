import { HtmlParser } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { CenterspageComponent } from './components/centerspage/centerspage.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { PasswordChangeComponent } from './components/password-change/password-change.component';
import {AuthGuardService} from "./service/auth-guard.service";
import {RoleGuardService} from "./service/role-guard.service";
import {ReservationComponent} from "./components/reservation/reservation.component";

const routes: Routes = [
  {path: 'login', component: LoginpageComponent},
  {path: 'home',component: HomepageComponent},
  {path: 'centres', component: CenterspageComponent},
  {path: 'my-profile', component: MyProfileComponent},
  {path: 'password-change', component: PasswordChangeComponent },
  {path: 'appointment', component: AppointmentComponent },
  {path: 'reservation', component: ReservationComponent, canActivate: [AuthGuardService]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

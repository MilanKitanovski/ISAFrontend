
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { HeaderpageComponent } from './components/headerpage/headerpage.component';
import { CenterspageComponent } from './components/centerspage/centerspage.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { RegisterComponent } from './components/register/register.component';
import { PasswordChangeComponent } from './components/password-change/password-change.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NgModule } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";
import {NgxMatDatetimePickerModule, NgxMatNativeDateModule} from "@angular-material-components/datetime-picker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {NgxMaterialTimepickerModule} from "ngx-material-timepicker";
import {JWT_OPTIONS, JwtHelperService} from "@auth0/angular-jwt";
import { ReservationComponent } from './components/reservation/reservation.component';
import {MatSortModule} from "@angular/material/sort";

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginpageComponent,
    HeaderpageComponent,
    CenterspageComponent,
    MyProfileComponent,
    RegisterComponent,
    PasswordChangeComponent,
    AppointmentComponent,
    ReservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatButtonModule,
    MatSelectModule,
    MatRippleModule,
    NgxMatDatetimePickerModule,
    NgxMatNativeDateModule,
    NgxMaterialTimepickerModule,
    MatSortModule,
  ],
  providers: [{provide:JWT_OPTIONS, useValue: JWT_OPTIONS}, JwtHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }

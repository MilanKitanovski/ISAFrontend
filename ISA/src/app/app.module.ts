import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { HeaderpageComponent } from './components/headerpage/headerpage.component';
import { CenterspageComponent } from './components/centerspage/centerspage.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { RegisterComponent } from './components/register/register.component';
import { PasswordChangeComponent } from './components/password-change/password-change.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginpageComponent,
    HeaderpageComponent,
    CenterspageComponent,
    MyProfileComponent,
    RegisterComponent,
    PasswordChangeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

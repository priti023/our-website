import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { EventProfileComponent } from './event-profile/event-profile.component';
import { TicketfairComponent } from './ticketfair/ticketfair.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { GeoLocationComponent } from './geo-location/geo-location.component';
import { HeaderComponent } from './header/header.component';
import { JavaComponent } from './components/java/java.component';
import { AngularComponent } from './components/angular/angular.component';
import { ReactjsComponent } from './components/reactjs/reactjs.component';



@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    RegistrationComponent,
    HomeComponent,
    DashbordComponent,
    UpdateProfileComponent,
    MyprofileComponent,
    EventProfileComponent,
    TicketfairComponent,
    EventRegistrationComponent,
    GeoLocationComponent,
    HeaderComponent,
    JavaComponent,
    AngularComponent,
    ReactjsComponent,



  ],
  imports: [
    Ng2SmartTableModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBe9knES43miVrq3GJ3qde6ZdqcGFVc1-Q',
      libraries: ['places']
    }),
    MatToolbarModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

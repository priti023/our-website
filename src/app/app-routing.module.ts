import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import {AuthGuardGuard} from './authGuard/auth-guard.guard';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { EventProfileComponent } from './event-profile/event-profile.component';
import { TicketfairComponent } from './ticketfair/ticketfair.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { HeaderComponent } from './header/header.component';
import { JavaComponent } from './components/java/java.component';
import { AngularComponent } from './components/angular/angular.component';
import { ReactjsComponent } from './components/reactjs/reactjs.component';



const routes: Routes = [
  { path: '', redirectTo: '\home', pathMatch: 'full' },
  { path: 'login', component: LogInComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'dashbord', component: DashbordComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardGuard] },
  { path: 'updateProfile', component: UpdateProfileComponent },
  { path: 'myprofile', component: MyprofileComponent },
  { path: 'eventProfile', component: EventProfileComponent },
  { path: 'ticketfair', component: TicketfairComponent },
  { path: 'eventregister', component: EventRegistrationComponent },
  { path: 'java', component: JavaComponent },
  { path: 'angular', component: AngularComponent },
  { path: 'reactjs', component: ReactjsComponent },
  { path: '**', component: HomeComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as tableData from './event-list-settings';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-event-profile',
  templateUrl: './event-profile.component.html',
  styleUrls: ['./event-profile.component.css']
})
export class EventProfileComponent implements OnInit {

  private eventDetails: any;
  private settings;
  source: any;
  private testData;


  constructor(private router: Router,
              private httpClient: HttpClient) { }

  ngOnInit() {
    this.settings = tableData.settings;
    // this.eventDetails= JSON.parse(localStorage.getItem("eventData"));
    this.httpClient.get('http://localhost:3000/eventsapi/findAllEvents', ).subscribe(
  (data: any) => {
    console.log(data);
    this.testData = data;
    console.log(this.testData);
  });

  }
ticketfair() {
  this.router.navigate(['/ticketfair']);
}


// onUserRowSelect(){
//   this.eventDetails= JSON.parse(localStorage.getItem("eventData"));
//   // this.source=this.eventDetails;
//   // console.log(this.source);

// }
// const testData =[{eventName: "Table Test",
// eventType: "Node Demo",
// eventLocation: "Pune",
// startDate: "2020-01-16",
// endDate: "2020-01-20",
// description: "Socket Demo"}]
// testData=JSON.parse(localStorage.getItem("eventData"));






}

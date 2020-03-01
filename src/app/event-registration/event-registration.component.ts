import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-event-registration',
  templateUrl: './event-registration.component.html',
  styleUrls: ['./event-registration.component.css']
})
export class EventRegistrationComponent implements OnInit {

  eventForm: FormGroup;
  submitted = false;

  constructor(private router: Router,
              private httpClient: HttpClient,
              private formBuilder: FormBuilder,
              private toastrService: ToastrService, ) { }

  ngOnInit() {
    this.eventForm = this.formBuilder.group({
     eventName: ['', Validators.required],
     eventType: ['', Validators.required, ],
     eventLocation: ['', Validators.required, ],
     startDate: ['', Validators.required, ],
     endDate: ['', Validators.required, ],
     description: ['', Validators.required, ],
   });
  }

  get f() { return this.eventForm.controls; }

  onSubmit() {
    // alert("hello")
    this.submitted = true;
    console.log(this.eventForm.value);
    if (this.eventForm.invalid) {
      return;
    }
    this.httpClient.post('http://localhost:3000/eventsapi/event', this.eventForm.value).subscribe(
      (data: any) => {
        console.log(data);
        if (data.status == 'error') {
          // alert(data.msg);
          this.toastrService.error('Error Occur when Event Registering ');
        } else if (data.status == 'success') {
          // alert(data.msg);
          this.toastrService.success('Event Registered Successfully');
          localStorage.setItem('eventData', JSON.stringify(data.details));
          this.router.navigate(['/dashbord']);
        }
      });
  }

}

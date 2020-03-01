import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MapsAPILoader, MouseEvent } from '@agm/core';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class DashbordComponent implements OnInit {

  private userDetails: any;
  eventForm: FormGroup;
  submitted = false;


  constructor(private router: Router,
              config: NgbModalConfig,
              private modalService: NgbModal,
              private httpClient: HttpClient,
              private formBuilder: FormBuilder,
              private toastrService: ToastrService,
              private mapsAPILoader: MapsAPILoader,
              private ngZone: NgZone) { }

  ngOnInit() {
   this.userDetails = JSON.parse(localStorage.getItem('userData'));
  //  this.eventForm = this.formBuilder.group({
  //   eventName: ['', Validators.required],
  //   eventType: ['', Validators.required,],
  //   eventLocation: ['', Validators.required,],
  //   startDate: ['', Validators.required,],
  //   endDate: ['', Validators.required,],
  //   description: ['', Validators.required,],
  // });
  }


  get f() { return this.eventForm.controls; }
  myprofile() {
    this.router.navigate(['/myprofile']);
  }

  logout() {
    localStorage.setItem('userData', '');
    // alert("LogOut Successfully");
    this.toastrService.success('LogOut Successfully');
    this.router.navigate(['/home']);
  }
  eventregister() {
    this.router.navigate(['/eventregister']);
  }
  allEvents() {
    this.router.navigate(['/eventProfile']);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  title = 'YessInfoTech';
  registerForm: FormGroup;
  submitted = false;
  xyz = 'priti';
  abc = '1234';
  constructor(private formBuilder: FormBuilder, private router: Router,
              private httpClient: HttpClient) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required, ],

    });
  }
  get f() { return this.registerForm.controls; }
  onSubmit() {
    this.submitted = true;
    // var userE=this.registerForm.value.userName;
    // var userP=this.registerForm.value.password;
    // if(userE=="priti" && userP=="1234"){
    //   alert("success");
    //   this.router.navigate(["/dashbord"]);
    // }
    if (this.registerForm.invalid) {
      return;
  } else {
      alert('username or password invalid');
    }

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    // this.router.navigate(["/dashbord"])
}
Registration() {
  this.router.navigate(['/registration']);
}

}

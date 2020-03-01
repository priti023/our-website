import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'OUR WEBSITE';
  registerForm: FormGroup;
  submitted = false;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private httpClient: HttpClient,
              private toastrService: ToastrService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required, ],
    });
  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    console.log(this.registerForm.value);
    if (this.registerForm.invalid) {
      return;
    }
    this.httpClient.post('http://localhost:3000/api/login', this.registerForm.value).subscribe(
      (data: any) => {
        console.log(data);
        if (data.status == 'error') {
         this.toastrService.error('emailid  not Registered ');
         alert(data.msg);
        } else if (data.status == 'success') {
          // alert(data.msg);
          this.toastrService.success('LOgin Successfully');
          localStorage.setItem('userData', JSON.stringify(data.details));
          console.log(data.details);
        //  console.log(localStorage.getItem("userData").email);
          // localStorage.setItem("userName","");
          this.router.navigate(['/dashbord']);
        }
      });
  }
  Registration() {
    this.router.navigate(['/registration']);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  title = 'OUR WEBSITE';
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private http: HttpClient,
              private toastrService: ToastrService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(4)]],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phonenumber: ['', [Validators.required, Validators.minLength(10), Validators.pattern('')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    console.log(this.registerForm.value);
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.http.post('http://localhost:3000/api/register', this.registerForm.value).subscribe(
      (data: any) => {
        console.log(data.status);
        if (data.status == 'error') {
          alert(data.msg);
        } else if (data.status == 'success') {
          this.toastrService.success('Registration Successfully');
          // alert(data.msg);
          // alert(data.detail);
          this.router.navigate(['/home']);
        }
      },
      (error) => {
        // console.log("error occur", error);
       this.toastrService.success('error occur please try again letter');
        // alert("error occur please try again letter");
      }
    );
  }
  Login() {
    this.router.navigate(['/home']);
  }
}

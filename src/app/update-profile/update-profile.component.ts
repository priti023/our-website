import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  updateForm: FormGroup;
  submitted = false;
  private userDetails: any;

  constructor(private formBuilder: FormBuilder,
              private httpClient: HttpClient,
              private router: Router,
              private toastrService: ToastrService) { }

  ngOnInit() {
    this.userDetails = JSON.parse(localStorage.getItem('userData'));
    this.updateForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
     newpassword: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  get f() { return this.updateForm.controls; }

  onSubmit() {
    this.submitted = true;
    console.log(this.updateForm.value);
    if (this.updateForm.invalid) {
        return;
    }
    this.httpClient.post('http://localhost:3000/api/updateInfo', this.updateForm.value).subscribe(
      (data: any) => {
        console.log(data);
        if (data.status == 'error') {
         this.toastrService.error('Error when updating your profile');
          // alert(data.msg);
        } else if (data.status == 'success') {
          this.toastrService.success('your profile updated successfully');
          // alert(data.msg);
          this.router.navigate(['/dashbord']);
        }
      });
  }
}

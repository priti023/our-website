import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {

  private userDetails: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.userDetails = JSON.parse(localStorage.getItem('userData'));
  }
  updateProfile() {
    this.router.navigate(['/updateProfile']);
  }
  logout() {
    localStorage.setItem('userData', '');
    alert('LogOut Successfully');
    this.router.navigate(['/home']);
  }
}

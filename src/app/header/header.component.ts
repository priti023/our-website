import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  selectedOptio = '';
  constructor(private router: Router,
             ) { }

  ngOnInit() {
  }
  logo() {
    this.router.navigate(['/dashbord']);
  }

  selectOption(id: any) {
    // getted from event
    // console.log(id);
    // getted from binding
    console.log(this.selectedOptio);
    if (id == 1) {
      console.log(id);
      this.router.navigate(['/java']);
    } else if (id == 2) {
      this.router.navigate(['/angular']);
    } else if (id == 6) {
      this.router.navigate(['/reactjs']);
    }

  }
}

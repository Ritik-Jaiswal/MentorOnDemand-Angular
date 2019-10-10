import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  constructor(private router: Router) { }

  id;
  role;

  ngOnInit() {
    this.id = localStorage.getItem('user');
    this.role = localStorage.getItem('role');
    if (this.role != 1) {
      this.router.navigate(['index']);
    }
  }

  logout() {
    localStorage.removeItem('role');
    localStorage.removeItem('user');
    console.log(localStorage.getItem('user'));
    this.router.navigate(['index']);
  }

}

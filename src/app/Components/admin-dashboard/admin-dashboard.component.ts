import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private router: Router) { }

  role;
  ngOnInit() {
    this.role = localStorage.getItem('role');
    if (this.role != 3) {
      this.router.navigate(['index']);
    }
  }

  logout() {
    localStorage.removeItem('role');
    this.router.navigate(['index']);
  }
}

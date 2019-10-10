import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-mentor-dashboard',
  templateUrl: './mentor-dashboard.component.html',
  styleUrls: ['./mentor-dashboard.component.css']
})
export class MentorDashboardComponent implements OnInit {

  constructor(private router: Router) { }

  id;
  role;

  ngOnInit() {
    this.id = localStorage.getItem('mentor');
    this.role = localStorage.getItem('role');
    if (this.role != 2) {
      this.router.navigate(['index']);
    }
  }
  logout() {
    localStorage.removeItem('mentor');
    console.log(localStorage.getItem('mentor'));
    localStorage.removeItem('role');
    this.router.navigate(['index']);


  }

}

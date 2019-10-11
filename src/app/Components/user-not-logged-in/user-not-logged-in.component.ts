import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserDtlService } from '../../Services/user-dtl.service';
import { Router } from '@angular/router';
import { identifierModuleUrl } from '@angular/compiler';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-user-not-logged-in',
  templateUrl: './user-not-logged-in.component.html',
  styleUrls: ['./user-not-logged-in.component.css']
})
export class UserNotLoggedInComponent implements OnInit {

  constructor(private fb: FormBuilder, private service: UserDtlService, private router: Router, private toastr: ToastrService) { }

  Search: FormGroup;
  skillData;
  UserRegister: FormGroup;

  getSkills() {
    this.service.refreshList().subscribe(data => {
      this.skillData = data;
    });
  }

  ngOnInit() {

    this.Search = this.fb.group({
      technology: ['', Validators.required]
    });

    this.getSkills();



  }
  Trainerdetails: object;
  onSubmit() {
    if (this.Search.invalid) {
      return;
    }

    this.service.trainerList(this.Search.value.technology).subscribe(data => {
      this.Trainerdetails = data;
      console.log('checking');
      console.log(this.Trainerdetails);
    });
  }
}


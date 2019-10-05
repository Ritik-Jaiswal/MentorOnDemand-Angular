import { Component, OnInit } from '@angular/core';
import { UserDtlService } from 'src/app/Services/user-dtl.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-propose-training',
  templateUrl: './propose-training.component.html',
  styleUrls: ['./propose-training.component.css']
})
export class ProposeTrainingComponent implements OnInit {




  paramId: number;
  trainerTechnology: string;

  trainerData: any;
  userData: any;
  skillData: object;

  showRequestedCourse;any;
  userId:any;

  timeSlot: string;
  startDate: Date;
  endDate: Date;
  userName: string;
  email: string;
  name: string;
  fees: string;
  prerequisites: string;
  yourName:string;
  request:Boolean;
  requestSent:any;

  constructor(private service:UserDtlService,private router: Router,private route:ActivatedRoute) { 
  }

  ngOnInit() {
    this.getParamData();
    this.getById();
    this.userId=localStorage.getItem('user');
    this.getUserById();
    this.getSkillByName();
  }

  getParamData() {
    this.route.queryParams.subscribe(params => {
      let id = params['trainingId'];
      this.paramId = +id;
      this.trainerTechnology=params['trainingName'];
    });
  }

  getSkillByName(){
    this.service.refreshList1(this.trainerTechnology).subscribe(data=>{
      this.skillData=data[0];
      console.log(this.skillData);
    });
  }
  getById() {
    this.service.getUserById(this.paramId).subscribe(data => {
      this.trainerData = data;
      console.log(this.trainerData);
    });
  }
  getUserById() {
    this.service.getUserById(this.userId).subscribe(data => {
      this.userData = data;
      console.log(this.userData);
    });
  }

}

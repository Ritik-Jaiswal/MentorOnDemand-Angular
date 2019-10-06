import { Component, OnInit } from '@angular/core';
import { UserDtlService }from '../../../Services/user-dtl.service';
import * as _ from "underscore";
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-notification',
  templateUrl: './user-notification.component.html',
  styleUrls: ['./user-notification.component.css']
})
export class UserNotificationComponent implements OnInit {

  userId:any;
  userTrainingData:any;
  acceptedTraining:object;
  pendingTraining:object;
  rejectedTraining:object;
  TrainingData:object;
  paymentDone:object;
  paymentNotDone:object;
  currentTraining:object;
  date:any;
  constructor(private service:UserDtlService,private router: Router) { }

  ngOnInit() {
    this.userId=localStorage.getItem('user');
    //console.log(this.userId);

    this.getTrainingByUserId();

    console.log('date checking');

    var today = new Date();
    this.date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    console.log(this.date);
    this.currentTraining=_.filter(this.paymentDone, function(startDate){ return startDate > this.date ; });
    console.log(this.currentTraining);
  }
  index:any;
  pending:any;
  getTrainingByUserId() {
    this.service.userTrainingList(this.userId).subscribe(data => {
      this.userTrainingData = data;
      console.log(this.userTrainingData);
      
      this.TrainingData=_.where(this.userTrainingData,{requested:true});
      this.pendingTraining=_.where(this.TrainingData,{rejectNotify:null});

      //console.log('pending trainings');
      //console.log(this.pendingTraining);
      this.rejectedTraining=_.where(this.TrainingData,{rejectNotify:true});

      //console.log('rejected trainings');
      //console.log(this.rejectedTraining);
      this.acceptedTraining=_.where(this.TrainingData,{rejectNotify:false});

      this.paymentDone=_.where(this.acceptedTraining,{paymentStatus:true});
      //console.log('paid');
      //console.log(this.paymentDone);

      this.paymentNotDone=_.where(this.acceptedTraining,{paymentStatus:null});
      //console.log('not paid');
      //console.log(this.paymentNotDone);

      //console.log('accepted trainings');
      //console.log(this.acceptedTraining);
    });
  }

  payement(id){
    const data={
      trainingId:id
    }
    this.router.navigate(['/user/payments'],{queryParams:data});
  }
}

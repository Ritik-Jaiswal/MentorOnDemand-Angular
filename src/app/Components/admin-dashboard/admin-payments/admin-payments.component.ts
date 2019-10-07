import { Component, OnInit } from '@angular/core';
import { UserDtlService } from 'src/app/Services/user-dtl.service';
import * as _ from "underscore";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-admin-payments',
  templateUrl: './admin-payments.component.html',
  styleUrls: ['./admin-payments.component.css']
})
export class AdminPaymentsComponent implements OnInit {

  PaymentData: object;
  PaymentDataById: object;
  noCommisionTaken: object;
  edit: boolean = false;
  Commission: FormGroup;
  constructor(private fb: FormBuilder, private service: UserDtlService) { }

  ngOnInit() {
    this.getPayment();
    this.edit = false;
    this.Commission = this.fb.group({
      com: ['', Validators.required]
    });
  }

  getPayment() {
    this.service.paymentList().subscribe(data => {
      this.PaymentData = data;

      console.log(this.noCommisionTaken);
      console.log(this.PaymentData);
    });
  }
  editOption(id) {
    this.edit = true;
    console.log(id);
  }

  commissionEdit(id) {
    this.edit = false;
    console.log(id);
    this.service.paymentDetailsById(id).subscribe(data => {
      this.PaymentDataById = data;
      console.log(this.PaymentDataById);


      var result1 = {
        amount:this.PaymentDataById['amount'],
        mentorId:this.PaymentDataById['mentorId'],
        mentorName:this.PaymentDataById['mentorName'],
        trainingId:this.PaymentDataById['trainingId'],
        skillName:this.PaymentDataById['skillName'],
        totalAmountToMentor:this.PaymentDataById['amount']-this.Commission.value.com,
        commision:this.Commission.value.com
      }
      console.log(result1);
      this.service.paymentEdit(id, result1).subscribe(res => {
        console.log('success');
        //console.log(res);
        this.getPayment();
      });


    });
  }
}

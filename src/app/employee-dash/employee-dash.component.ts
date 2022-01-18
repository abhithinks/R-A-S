import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import * as moment from 'moment';
import { FormControl, FormGroup, Validators, NgForm, FormBuilder } from '@angular/forms';

import { EmployeeDashModel } from './employee-dash.model';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../shared/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-dash',
  templateUrl: './employee-dash.component.html',
  styleUrls: ['./employee-dash.component.css']
})
export class EmployeeDashComponent implements OnInit {
  minLoginDate = new Date();
  maxLoginDate= new Date();
  minLogoutDate = new Date();
  maxLogoutDate= new Date();
  todayDate= moment();
  logoutDate= moment();
  myLoginForm!: FormGroup;
  formvalue !: FormGroup;
  EmployeeDashModelsObj : EmployeeDashModel = new EmployeeDashModel();

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    weekends: true, // initial value
  };
  toggleWeekends() {
    this.calendarOptions.weekends = !this.calendarOptions.weekends // toggle the boolean!
  }
  constructor(private formbuilder: FormBuilder,
    private api :ApiService, public toastr: ToastrService) { }

  ngOnInit(): void {
    this.myLoginForm = new FormGroup({
      'login': new FormControl(null, [Validators.required]),
      'logout': new FormControl(null, [Validators.required, Validators.email]),

    })
   
  }
 
  getFormattedDated(){
    const todayDate = new Date();
    this.toastr.success("Your Attendance has been marked at :" + todayDate);

    this.EmployeeDashModelsObj.login = this.myLoginForm.value.login;
    this.api.postStatus(this.EmployeeDashModelsObj)
.subscribe(res=>{
  console.log(res);
  
  
  
},
err=>{
  this.toastr.warning("Something went wrong");
})
  
  }
  getlogoutDated(){
    const logoutDate = new Date();
    this.toastr.warning("You have logged out succesfully :" + logoutDate  );

    this.EmployeeDashModelsObj.logout = this.myLoginForm.value.logout;

    this.api.postStatus(this.EmployeeDashModelsObj)
.subscribe(res=>{
  console.log(res);
 
 
  
},
err=>{
  this.toastr.warning("Something went wrong");
})
 
  }


}

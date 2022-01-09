import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import * as moment from 'moment';
@Component({
  selector: 'app-employee-dash',
  templateUrl: './employee-dash.component.html',
  styleUrls: ['./employee-dash.component.css']
})
export class EmployeeDashComponent implements OnInit {
  todayDate= moment();
  logoutDate= moment();
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    weekends: true, // initial value
  };
  toggleWeekends() {
    this.calendarOptions.weekends = !this.calendarOptions.weekends // toggle the boolean!
  }
  constructor() { }

  ngOnInit(): void {
  }
  getFormattedDated(){
    const todayDate = new Date();
    alert("Your Attendance has been marked at :" + todayDate);
  }
  getlogoutDated(){
    const logoutDate = new Date();
    alert("You have logged out succesfully :" + logoutDate);
  }
}

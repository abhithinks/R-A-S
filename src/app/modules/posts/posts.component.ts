import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms'
import { ApiService } from 'src/app/shared/api.service';
import { EmployeeModel } from './employee-dashboard.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  
 
  employeeData !: any;
 
  constructor(
    private api :ApiService) { }

  ngOnInit(): void {
    this.api.product()
  .subscribe((productData: any) => this.employeeData = productData)
  }
  
 
  // getAllEmployee(){
  //   this.api.getEmploye()
  //   .subscribe(res=>{
  //  this.employeeData = res;
  //   })
  }
  




import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms'
import { ApiService } from 'src/app/shared/api.service';
import { EmployeeModel } from './employee-dashboard.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  formvalue !: FormGroup;
  employeeModelObj : EmployeeModel = new EmployeeModel();
  employeeData !: any;
  showAdd !: boolean;
  showUpdate !: boolean;
  constructor(private formbuilder: FormBuilder,
    private api :ApiService) { }

  ngOnInit(): void {
    this.formvalue = this.formbuilder.group({
      firstname:[''],
      lastname:[''],
      email:[''],
      mobile:[''],
      salary:['']
    })
    this.getAllEmployee();
  }
  clickAddEmploye(): void{
    this.formvalue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }
  postEmployeeDetails(){
    this.employeeModelObj.firstname = this.formvalue.value.firstname;
    this.employeeModelObj.lastname = this.formvalue.value.lastname;
    this.employeeModelObj.email = this.formvalue.value.email;
    this.employeeModelObj.mobile = this.formvalue.value.mobile;
    this.employeeModelObj.salary = this.formvalue.value.salary;

  this.api.postEmploye(this.employeeModelObj)
  .subscribe(res=>{
    console.log(res);
    alert("Product added successfully")
    let ref = document.getElementById('cancel')
    ref?.click();
    this.formvalue.reset();
    this.getAllEmployee();
  },
  err=>{
    alert("Something went wrong");
  })
  }
  getAllEmployee(){
    this.api.getEmploye()
    .subscribe(res=>{
   this.employeeData = res;
    })
  }
  deleteEmployee(row : any){
    this.api.deleteEmploye(row.id)
    .subscribe(res=>{
      alert("Leave Request Denied");
       this.getAllEmployee();
    })
  }
  onEdit(row : any){
    this.showAdd = false;
    this.showUpdate = true;
    this.employeeModelObj.id =  row.id
    this.formvalue.controls['firstname'].setValue(row.firstname);
    this.formvalue.controls['lastname'].setValue(row.lastname);
    this.formvalue.controls['email'].setValue(row.email);
    this.formvalue.controls['mobile'].setValue(row.mobile);
    this.formvalue.controls['salary'].setValue(row.salary);
  }

  updateEmployeeDetails(){
    this.employeeModelObj.firstname = this.formvalue.value.firstname;
    this.employeeModelObj.lastname = this.formvalue.value.lastname;
    this.employeeModelObj.email = this.formvalue.value.email;
    this.employeeModelObj.mobile = this.formvalue.value.mobile;
    this.employeeModelObj.salary = this.formvalue.value.salary;

    this.api.updateEmploye(this.employeeModelObj,this.employeeModelObj.id)
    .subscribe(res=>{
      alert("Updated Successfully");
      let ref = document.getElementById('cancel')
    ref?.click();
    this.formvalue.reset();
    this.getAllEmployee();
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm, FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/shared/api.service';
import { StatusModel } from './status.module';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  myReactiveForm!: FormGroup;
  formvalue !: FormGroup;
  StatusModelObj : StatusModel = new StatusModel();
  constructor(private formbuilder: FormBuilder,
    private api :ApiService) { }

  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
      'managerid': new FormControl(null, [Validators.required]),
      'status': new FormControl(null, [Validators.required, Validators.email])
      

    })
  }
  onSubmit(){
    console.log(this.myReactiveForm)
  }
  postleavetDetails(){
    this.StatusModelObj.managerid = this.myReactiveForm.value.username;
    this.StatusModelObj.status = this.myReactiveForm.value.email;
   
  
  this.api.postleave(this.StatusModelObj)
  .subscribe(res=>{
    console.log(res);
    alert("Leave updated successfully")
   
    this.formvalue.reset();
    
  },
  err=>{
    alert("Something went wrong");
  })
  }
}

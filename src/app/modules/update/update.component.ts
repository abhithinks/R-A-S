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
  ReactiveForm!: FormGroup;
  formvalue !: FormGroup;
  StatusModelObj : StatusModel = new StatusModel();
  constructor(private formbuilder: FormBuilder,
    private api :ApiService) { }

  ngOnInit(): void {
    this.ReactiveForm = new FormGroup({
      'managerid': new FormControl(null, [Validators.required]),
      'status': new FormControl(null, [Validators.required, Validators.email])
      

    })
  }
  onSubmit(){

    console.log(this.ReactiveForm)
  }
  postleaveDetails()
  {

    this.StatusModelObj.managerid = this.ReactiveForm.value.managerid;
    this.StatusModelObj.status = this.ReactiveForm.value.status;
   
  
  this.api.postleave(this.StatusModelObj)
  .subscribe(res=>{
    console.log(res);
    alert("Leave updated successfully")
   
    this.ReactiveForm.reset();
    
  },
  err=>{
    alert("Something went wrong");
  })
  }
}

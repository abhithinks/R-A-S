import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
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
    private api :ApiService, public toastr:ToastrService) { }

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
    this.toastr.success("Leave updated successfully")
   
    this.ReactiveForm.reset();
    
  },
  err=>{
    this.toastr.warning("Something went wrong");
  })
  }
}

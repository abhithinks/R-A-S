import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../shared/api.service';
import { ContactUsModel } from './contactus.model';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  issubmit: boolean =false;
  formvalue !: FormGroup;
  myReactiveForm!: FormGroup;
  notAllowedNames=['Tapzo' , 'Abhishek'];
  ContactUsModelObj : ContactUsModel = new ContactUsModel();
  constructor(private formbuilder: FormBuilder,
    private api :ApiService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
      'empname': new FormControl(null, [Validators.required, this.NaNames.bind(this)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      
      'description': new FormControl(null, Validators.required),
      

    })
  }
  onSubmit(){
    console.log(this.myReactiveForm)
  }
get user(){
  return this.myReactiveForm.get('empname')
}
get address(){
  return this.myReactiveForm.get('email')
}
get desccr(){
  return this.myReactiveForm.get('description')
}


NaNames(control:FormControl){
  if(this.notAllowedNames.indexOf(control.value)!==-1){
   return {'error05005': true}
  }
   return null;
}

postContactDetails(){
 this.issubmit=true;
  this.ContactUsModelObj.empname = this.myReactiveForm.value.empname;
  this.ContactUsModelObj.email = this.myReactiveForm.value.email;
  
  this.ContactUsModelObj.description = this.myReactiveForm.value.description;
 

this.api.postContactUsEmp(this.ContactUsModelObj)
.subscribe(res=>{
  console.log(res);
  this.toastr.success("Ticket has been raised successfully")
  let ref = document.getElementById('cancel')
  ref?.click();
  this.formvalue.reset();
  
},
err=>{
  this.toastr.warning("Something went wrong");
})
}
}
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm, FormBuilder } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { ContactUsModel } from './contactus.model';


@Component({
  selector: 'app-applyleave',
  templateUrl: './applyleave.component.html',
  styleUrls: ['./applyleave.component.css']
})
export class ApplyleaveComponent implements OnInit {
  minDate = new Date();
  maxDate= new Date(2023,3,1);
  formvalue !: FormGroup;
  myReactiveForm!: FormGroup;
  notAllowedNames=['Tapzo' , 'Abhishek'];
  ContactUsModelObj : ContactUsModel = new ContactUsModel();
  constructor(private formbuilder: FormBuilder,
    private api :ApiService) { }

  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
      'username': new FormControl(null, [Validators.required, this.NaNames.bind(this)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'empid': new FormControl(null, Validators.required),
      'start': new FormControl(null, Validators.required),
      'category':new FormControl(null, Validators.required),
      'end':new FormControl(null, Validators.required)

    })
  }
  onSubmit(){
    console.log(this.myReactiveForm)
  }
get user(){
  return this.myReactiveForm.get('username')
}
get address(){
  return this.myReactiveForm.get('email')
}
get desccr(){
  return this.myReactiveForm.get('start')
}
get word(){
  return this.myReactiveForm.get('empid')
}
get nesccr(){
  return this.myReactiveForm.get('end')
}


NaNames(control:FormControl){
  if(this.notAllowedNames.indexOf(control.value)!==-1){
   return {'error05005': true}
  }
   return null;
}

postContactDetails(){
  this.ContactUsModelObj.username = this.myReactiveForm.value.username;
  this.ContactUsModelObj.email = this.myReactiveForm.value.email;
  this.ContactUsModelObj.empid = this.myReactiveForm.value.empid;
  this.ContactUsModelObj.start = this.myReactiveForm.value.start;
  this.ContactUsModelObj.category = this.myReactiveForm.value.category;
  this.ContactUsModelObj.end = this.myReactiveForm.value.end;

this.api.postContactUs(this.ContactUsModelObj)
.subscribe(res=>{
  console.log(res);
  alert("Leave Detail added successfully")
  let ref = document.getElementById('cancel')
  ref?.click();
  this.formvalue.reset();
  
},
err=>{
  alert("Something went wrong");
})
}
rangeFilter = (date:any) =>{
  const day = date.getDay();
  return day!= 0 && day!= 6;
}

}

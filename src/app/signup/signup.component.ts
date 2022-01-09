import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public signupform !: FormGroup;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.signupform= this.formBuilder.group({
      fullname:[''],
      email:[''],
      password:[''],
      mobile:[''],
      category:['']
    })
  }
    signUp() {
      this.http.post<any>("http://localhost:3000/signupUsers", this.signupform.value)
      .subscribe(res=>{
        alert("Signup Successfull");
        this.signupform.reset();
        this.router.navigate(['login'])
      },err=>{
        alert("something went wrong")
      }
      
      )
  }
  }


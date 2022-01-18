import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../authentication/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


 
  public loginForm!: FormGroup;
  user: boolean | undefined;
  a: any;
  toster: any;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router:Router, private toastr : ToastrService,
    public authserv: AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required],
      category:[null, Validators.required],
    })
  }

  login(){
    this.http.get<any>("http://localhost:3000/signupUsers")
    .subscribe(res=>{
       var user=res.find((a:any)=>{
        return (a.email === this.loginForm.value.email && a.password === this.loginForm.value.password && a.category === this.loginForm.value.category );
        localStorage.setItem('employee','manager');
       
      });
      if(user.category=='employee'){
        this.toastr.success('Login Success' );
        this.loginForm.reset();
        this.router.navigate(['employeeDash'])
      }
      else if(user.category=='manager'){
        this.toastr.success("Login Success");
        this.loginForm.reset();
        this.router.navigate(['admin'])
      }
      else{
        this.toastr.error();
        ("user not found");
      }
    })


  }

}

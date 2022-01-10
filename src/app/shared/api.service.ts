import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { map} from 'rxjs/operators'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }
  postEmploye(data : any){
    return this.http.post<any>("http://localhost:3000/posts",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  product():Observable<any>{
    return this.http.get('http://localhost:3000/leave')
  }

  
  getEmploye(){
    return this.http.get<any>("http://localhost:3000/employeeList")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateEmploye(data : any, id: number){
    return this.http.put<any>("http://localhost:3000/posts/"+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteEmploye(id : number){
    return this.http.delete<any>("http://localhost:3000/posts/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  postContactUs(data : any){
    return this.http.post<any>("http://localhost:3000/leave",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  postleave(data : any){
    return this.http.post<any>("http://localhost:3000/profile",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  postlogin(data : any){
    return this.http.post<any>("http://localhost:3000/leave",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  postStatus(data : any){
    return this.http.post<any>("http://localhost:3000/leaveList",data)
    .pipe(map((res:any)=>{
      return res;
    }))
 
}
}
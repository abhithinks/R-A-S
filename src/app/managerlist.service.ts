import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManagerlistService {

  constructor(private http:HttpClient) { }

  product():Observable<any>{
    return this.http.get('http://localhost:3000/managerList')

  }
}

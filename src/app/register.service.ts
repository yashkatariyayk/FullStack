import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  uri ='http://localhost:3000/user';
  getUsers() {
    return this.http.get(this.uri)
    .pipe(map((response:Response)=>response.json()));

  }

  constructor(private http: HttpClient) { }

  addDetail(Name, Email, Password) {
    const obj = {
      Name,
      Email,
      Password
    };
    
  
    console.log(obj);
    this.http.post(`${this.uri}`, obj)
        .subscribe(res => console.log('Done'));
  }

  getDetail() {
    return this
           .http
           .get(`${this.uri}`);
  }
}

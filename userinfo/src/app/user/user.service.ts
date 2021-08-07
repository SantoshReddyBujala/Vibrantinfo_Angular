import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public baseUrl= 'https://reqres.in/';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
   return this.http.get(this.baseUrl + 'api/users')
    
  }
  getUser(id?: string):Observable<any> {
    return this.http.get(this.baseUrl + 'api/users/'+ id)
  }
  updateUser(){

  }
  deleteUser(id?:string):Observable<any>{
    return this.http.delete(this.baseUrl + 'api/users/'+ id)
  }
  
}

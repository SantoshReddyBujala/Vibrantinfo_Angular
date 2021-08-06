import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public autonticated = false
  constructor() { }
  public isAuthenticated(): boolean {
     return this.autonticated
  }
  authSuccess(){
  this.autonticated =true;
  }
}

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public autonticated = false
  constructor() { }
  /**
   * Authenticated method
   * @returns 
   */
  public isAuthenticated(): boolean {
     return this.autonticated
  }

  /**
   * Auth Sucess
   */
  authSuccess(){
  this.autonticated =true;
  }
}

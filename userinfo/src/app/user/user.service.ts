import { Injectable } from '@angular/core';

import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public baseUrl = 'https://reqres.in/';

  constructor(private http: HttpClient) { }

  /**
   * Get users list
   * @returns 
   */
  getUsers(): Observable<any> {
    return this.http.get(this.baseUrl + 'api/users').pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  /**
   * Get user details 
   * @param id 
   * @returns 
   */

  getUser(id?: string): Observable<any> {
    return this.http.get(this.baseUrl + 'api/users/' + id).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

   /**
    * Update user details
    * @param id 
    * @param employee 
    * @returns 
    */
  updateUser(id?: string, employee?: any) {
    return this.http.put(this.baseUrl + 'api/users/' + id, JSON.stringify(employee)).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  /**
   * 
   * @param employee 
   * @returns 
   */
  addUser(employee?: any) {
    return this.http.post(this.baseUrl + 'api/users/', employee).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  /**
   * Detele user
   * @param id 
   * @returns 
   */
  deleteUser(id?: string): Observable<any> {
    return this.http.delete(this.baseUrl + 'api/users/' + id).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // Error handling 
  handleError(error?: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}

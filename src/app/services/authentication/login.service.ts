import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from "rxjs";
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // rooturl = "http://localhost:4300/";
  rooturl = "https://fabloplatforms-vp-backend.zeet.app/investorAdmin/";

  constructor(private http: HttpClient) { }

  // Error handling 
  handleError(error: HttpErrorResponse) {
    // console.log(error)
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    // window.alert(errorMessage);
    return throwError(errorMessage);
  }

  adminLogin(data): Observable<any> {
    return this.http.post(this.rooturl + "investorAdminLogin", data)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
}

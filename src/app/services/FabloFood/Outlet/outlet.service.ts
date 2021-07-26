import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from "rxjs";
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class OutletService {

  // rooturl = "http://localhost:4300/";
  rooturl = "https://fablo-administrator-ahyzw.ondigitalocean.app/employee/";
  isLoggedIn: boolean = false;  
  public redirectUrl: string;

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


}

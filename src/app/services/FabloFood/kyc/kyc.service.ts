import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from "rxjs";
import { retry, catchError } from 'rxjs/operators';
import { data } from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class KycService {

  // rooturl = "http://192.168.1.26:3001/business/kyc/";
  rooturl = "https://fablo-restaurant-partner-98ykz.ondigitalocean.app/business/kyc/";
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


  kycDetails(data :any) {
    return this.http.get(this.rooturl + data)
      .pipe(
        retry(1),
        catchError((err) => {
          return throwError(err);    //Rethrow it back to component
        })
      )
  }

  kycReject(data :any) {
    return this.http.get(this.rooturl + data + "/reject")
      .pipe(
        retry(1),
        catchError((err) => {
          return throwError(err);    //Rethrow it back to component
        })
      )
  }

  kycApprove(data :any) {
    return this.http.get(this.rooturl + data + "/approve")
      .pipe(
        retry(1),
        catchError((err) => {
          return throwError(err);    //Rethrow it back to component
        })
      )
  }

  kycBlock(data :any) {
    return this.http.get(this.rooturl + data + "/block")
      .pipe(
        retry(1),
        catchError((err) => {
          return throwError(err);    //Rethrow it back to component
        })
      )
  }

  kycDocuments(data :any) {
    return this.http.get(this.rooturl + data + "/documents")
      .pipe(
        retry(1),
        catchError((err) => {
          return throwError(err);    //Rethrow it back to component
        })
      )
  }
}

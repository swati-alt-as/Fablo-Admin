import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from "rxjs";
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

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

  createEmployeeID(data:any) {
    return this.http.post(this.rooturl + "createEmployeeID/", data)
      .pipe(
        retry(1),
        catchError((err) => {
          return throwError(err);    //Rethrow it back to component
        })
      )
  }

  register(data:any) {
    return this.http.post(this.rooturl + "register", data)
      .pipe(
        retry(1),
        catchError((err) => {
          return throwError(err);    //Rethrow it back to component
        })
      )
  }

  employeeList() {
    return this.http.get(this.rooturl + "list/")
      .pipe(
        retry(1),
        catchError((err) => {
          return throwError(err);    //Rethrow it back to component
        })
      )
  }


  addBloodGroup(data:any) {
    return this.http.post(this.rooturl + "blood/", data)
      .pipe(
        retry(1),
        catchError((err) => {
          return throwError(err);    //Rethrow it back to component
        })
      )
  }

  bloodGroupList() {
    return this.http.get(this.rooturl + "blood/")
      .pipe(
        retry(1),
        catchError((err) => {
          return throwError(err);    //Rethrow it back to component
        })
      )
  }


  departmentList() {
    return this.http.get(this.rooturl + "department/")
      .pipe(
        retry(1),
        catchError((err) => {
          return throwError(err);    //Rethrow it back to component
        })
      )
  }

  addDepartment(data:any) {
    return this.http.post(this.rooturl + "department/", data)
      .pipe(
        retry(1),
        catchError((err) => {
          return throwError(err);    //Rethrow it back to component
        })
      )
  }

  designationList() {
    return this.http.get(this.rooturl + "designation/")
      .pipe(
        retry(1),
        catchError((err) => {
          return throwError(err);    //Rethrow it back to component
        })
      )
  }

  addDesignation(data:any) {
    return this.http.post(this.rooturl + "designation/", data)
      .pipe(
        retry(1),
        catchError((err) => {
          return throwError(err);    //Rethrow it back to component
        })
      )
  }

  educationList() {
    return this.http.get(this.rooturl + "education/")
      .pipe(
        retry(1),
        catchError((err) => {
          return throwError(err);    //Rethrow it back to component
        })
      )
  }

  addEducation(data:any) {
    return this.http.post(this.rooturl + "education/", data)
      .pipe(
        retry(1),
        catchError((err) => {
          return throwError(err);    //Rethrow it back to component
        })
      )
  }

  workExperienceList() {
    return this.http.get(this.rooturl + "workExperience/")
      .pipe(
        retry(1),
        catchError((err) => {
          return throwError(err);    //Rethrow it back to component
        })
      )
  }

  addWorkExperience(data:any) {
    return this.http.post(this.rooturl + "workExperience/", data)
      .pipe(
        retry(1),
        catchError((err) => {
          return throwError(err);    //Rethrow it back to component
        })
      )
  }

  employeeTypeList() {
    return this.http.get(this.rooturl + "employeeType/")
      .pipe(
        retry(1),
        catchError((err) => {
          return throwError(err);    //Rethrow it back to component
        })
      )
  }

  addEmployeeType(data:any) {
    return this.http.post(this.rooturl + "employeeType/", data)
      .pipe(
        retry(1),
        catchError((err) => {
          return throwError(err);    //Rethrow it back to component
        })
      )
  }
}



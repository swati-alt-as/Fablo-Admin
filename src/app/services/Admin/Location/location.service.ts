import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from "rxjs";
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LocationService {

  // rooturl = "http://192.168.1.26:3001";
  rooturl = "https://fablo-restaurant-partner-98ykz.ondigitalocean.app/locations/";
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

  activeCitiesList() {
    return this.http.get(this.rooturl + "cities")
      .pipe(
        retry(1),
        catchError((err) => {
          return throwError(err);    //Rethrow it back to component
        })
      )
  }

  inactiveCitiesList() {
    return this.http.get(this.rooturl + "cities/inactive")
      .pipe(
        retry(1),
        catchError((err) => {
          return throwError(err);    //Rethrow it back to component
        })
      )
  }

  makeActiveCity(data:any) {
    return this.http.get(this.rooturl + "cities/makeActive/"+ data)
      .pipe(
        retry(1),
        catchError((err) => {
          return throwError(err);    //Rethrow it back to component
        })
      )
  }

  makeInactiveCity(data:any) {
    return this.http.get(this.rooturl + "cities/makeInactive/"+ data)
      .pipe(
        retry(1),
        catchError((err) => {
          return throwError(err);    //Rethrow it back to component
        })
      )
  }

  activeCountriesList() {
    return this.http.get(this.rooturl + "countries")
      .pipe(
        retry(1),
        catchError((err) => {
          return throwError(err);    //Rethrow it back to component
        })
      )
  }

  inactiveCountriesList() {
    return this.http.get(this.rooturl + "countries/inactive")
      .pipe(
        retry(1),
        catchError((err) => {
          return throwError(err);    //Rethrow it back to component
        })
      )
  }

  makeActiveCountry(data:any) {
    return this.http.get(this.rooturl + "countries/makeActive/"+ data)
      .pipe(
        retry(1),
        catchError((err) => {
          return throwError(err);    //Rethrow it back to component
        })
      )
  }

  makeInactiveCountry(data:any) {
    return this.http.get(this.rooturl + "countries/makeInactive/"+ data)
      .pipe(
        retry(1),
        catchError((err) => {
          return throwError(err);    //Rethrow it back to component
        })
      )
  }


  activeStatesList() {
    return this.http.get(this.rooturl + "states")
      .pipe(
        retry(1),
        catchError((err) => {
          return throwError(err);    //Rethrow it back to component
        })
      )
  }

  inactiveStatesList() {
    return this.http.get(this.rooturl + "states/inactive")
      .pipe(
        retry(1),
        catchError((err) => {
          return throwError(err);    //Rethrow it back to component
        })
      )
  }

  makeActiveState(data:any) {
    return this.http.get(this.rooturl + "states/makeActive/"+ data)
      .pipe(
        retry(1),
        catchError((err) => {
          return throwError(err);    //Rethrow it back to component
        })
      )
  }

  makeInactiveState(data:any) {
    return this.http.get(this.rooturl + "states/makeInactive/"+ data)
      .pipe(
        retry(1),
        catchError((err) => {
          return throwError(err);    //Rethrow it back to component
        })
      )
  }

  
  activeAreaList() {
    return this.http.get(this.rooturl + "areas")
      .pipe(
        retry(1),
        catchError((err) => {
          return throwError(err);    //Rethrow it back to component
        })
      )
  }

  addArea(data:any) {
    return this.http.post(this.rooturl + "areas", data)
      .pipe(
        retry(1),
        catchError((err) => {
          return throwError(err);    //Rethrow it back to component
        })
      )
  }

  inactiveAreaList() {
    return this.http.get(this.rooturl + "areas/inactive")
      .pipe(
        retry(1),
        catchError((err) => {
          return throwError(err);    //Rethrow it back to component
        })
      )
  }

  makeActiveArea(data:any) {
    return this.http.get(this.rooturl + "areas/makeActive/"+ data)
      .pipe(
        retry(1),
        catchError((err) => {
          return throwError(err);    //Rethrow it back to component
        })
      )
  }

  makeInactiveArea(data:any) {
    return this.http.get(this.rooturl + "areas/makeInactive/"+ data)
      .pipe(
        retry(1),
        catchError((err) => {
          return throwError(err);    //Rethrow it back to component
        })
      )
  }



}

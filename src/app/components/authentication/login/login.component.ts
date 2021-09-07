import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
// import { NgxSpinnerService } from "ngx-spinner";
import { Validators, FormGroup, FormControl } from '@angular/forms'
import { LoginService } from '../../../services/authentication/login.service';

interface paramData {
  email: string,
  password: string,
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  message: string;
  ErrorAlert: boolean = false
  SuccessAlert: boolean = false
  signin: FormGroup;
  returnUrl: string;

  get log() {
    return this.signin.controls;
  }

  constructor(private router: Router, private loginService: LoginService) { }


  ngOnInit(): void {

    this.signin = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', Validators.required)
    });

  }

  adminLogIn() {

    let loginPostData: paramData = {
      "email": this.signin.value["email"],
      "password": this.signin.value["password"],
    };

    // this.spinnerService.show();
    this.loginService.adminLogin(loginPostData).subscribe((result) => {
      // this.spinnerService.hide();
      if (result["success"] == true) {
        this.SuccessAlert = true
        this.message = result["message"];
        localStorage.setItem('isLoggedIn', "true");
        localStorage.setItem("token", result["signedToken"]);
        this.router.navigate(['/administrator/dashboard'])
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else if (result["success"] == false) {
        this.ErrorAlert = true
        this.message = result["message"];
        this.router.navigate(['/auth/signin'])
        setTimeout(() => {
          window.location.reload();
        }, 5000);
      } else {
        this.router.navigate(['/auth/signin'])
      }
    })
  }


}

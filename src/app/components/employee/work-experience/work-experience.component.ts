import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../services/Admin/employee/employee.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { SwalService } from '../../../services/notification/swal.service'
import { ToastrserviceService } from '../../../services/notification/toastrservice.service'

interface workExpData {
  name: string,
}

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {

  message: string;
  workExpForm: FormGroup;
  result: any = {};

  workExpList: any = {};
  page = 1;
  count = 0;
  pageSize = 5;
  pageSizes = [5, 10, 15];
  data: string;

  constructor(private employee: EmployeeService, private router: Router, private swal: SwalService, private toastr: ToastrserviceService) { }

  ngOnInit(): void {
    this.workExpForm = new FormGroup({
      name: new FormControl('', Validators.required)
    });

    // this.spinnerService.show();
    this.employee.workExperienceList().subscribe((result) => {
      // this.spinnerService.hide();
      if (!(result["items"].length === 0)) {
        this.workExpList = result["items"];
        this.count = result["items"].length;
      }
    })
  }

  get f() {
    return this.workExpForm.controls;
  }

  saveWorkExp() {
    let postData: workExpData = {
      "name": this.workExpForm.value["name"]
    };
    this.employee.addWorkExperience(postData).subscribe((resultData) => {
      this.result = resultData;
      if (this.result["status"] == true) {
        this.message = this.result["message"];
        this.toastr.showSuccess(this.message, "Done")
        // this.swal.showSweetAlert("Done" , this.message, "WelCome Back");
        setTimeout(() => {
          window.location.reload();
        }, 5000);
      } else if (this.result["status"] == false) {
        this.message = this.result["message"];
        this.toastr.showError(this.message, this.result["status"])
        this.router.navigate(['/employee/workexperience'])
        setTimeout(() => {
          window.location.reload();
        }, 5000);
      } else {
        this.router.navigate(['/employee/workexperience'])
      }
    },
      (error: HttpErrorResponse) => {
        this.toastr.showError(error.error.message, error.error.status)
      })

  }

  
  handlePageChange(event: number): void {
    this.page = event;
    this.ngOnInit();
  }

  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.ngOnInit();
  }

}

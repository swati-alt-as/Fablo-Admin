import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../services/Admin/employee/employee.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { SwalService } from '../../../services/notification/swal.service'
import { ToastrserviceService } from '../../../services/notification/toastrservice.service'

interface departmentData {
  name: string,
  code: string
}

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {

  message: string;
  departmentForm: FormGroup;
  result: any = {};

  departmentList: any = {};
  page = 1;
  count = 0;
  pageSize = 10;
  pageSizes = [5, 10, 15];
  data: String;

  constructor(private employee: EmployeeService, private router: Router, private swal: SwalService, private toastr: ToastrserviceService) { }

  ngOnInit(): void {
    this.departmentForm = new FormGroup({
      name: new FormControl('', Validators.required),
      code: new FormControl('', Validators.required)
    });

    // this.spinnerService.show();
    this.employee.departmentList().subscribe((result) => {
      console.log(result)
      // this.spinnerService.hide();
      if (!(result["items"].length === 0)) {
        this.departmentList = result["items"];
        this.count = result["items"].length;
      }
    })
  }

  get f() {
    return this.departmentForm.controls;
  }

  saveDepartment() {
    let postData: departmentData = {
      "name": this.departmentForm.value["name"],
      "code": this.departmentForm.value["code"]
    };
    this.employee.addDepartment(postData).subscribe((resultData) => {
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
        this.router.navigate(['/Employee/Departments'])
        setTimeout(() => {
          window.location.reload();
        }, 5000);
      } else {
        this.router.navigate(['/Employee/Departments'])
      }
    },
      (error: HttpErrorResponse) => {
        this.toastr.showError(error.error.message, error.error.status)
        setTimeout(() => {
          window.location.reload();
        }, 5000);
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

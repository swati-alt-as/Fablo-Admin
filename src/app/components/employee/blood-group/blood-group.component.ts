import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../services/Admin/employee/employee.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { SwalService } from '../../../services/notification/swal.service'
import { ToastrserviceService } from '../../../services/notification/toastrservice.service'

interface bloodGroupData {
  name: string,
}

@Component({
  selector: 'app-blood-group',
  templateUrl: './blood-group.component.html',
  styleUrls: ['./blood-group.component.scss']
})
export class BloodGroupComponent implements OnInit {

  message: string;
  bloodGroupForm: FormGroup;
  result: any = {};

  bloodGroupList: any = {};
  page = 1;
  count = 0;
  pageSize = 10;
  pageSizes = [5, 10, 15];
  data: String;

  constructor(private employee: EmployeeService, private router: Router, private swal: SwalService, private toastr: ToastrserviceService) { }

  ngOnInit(): void {
    this.bloodGroupForm = new FormGroup({
      name: new FormControl('', Validators.required)
    });

    // this.spinnerService.show();
    this.employee.bloodGroupList().subscribe((result) => {
      console.log(result)
      // this.spinnerService.hide();
      if (!(result["items"].length === 0)) {
        this.bloodGroupList = result["items"];
        this.count = result["items"].length;
      }
    })
  }

  get f() {
    return this.bloodGroupForm.controls;
  }

  saveBloodGroup() {
    let postData: bloodGroupData = {
      "name": this.bloodGroupForm.value["name"]
    };
    this.employee.addBloodGroup(postData).subscribe((resultData) => {
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
        this.router.navigate(['/Employee/BloodGroups'])
        setTimeout(() => {
          window.location.reload();
        }, 5000);
      } else {
        this.router.navigate(['/Employee/BloodGroups'])
      }
    },
      (error: HttpErrorResponse) => {
        this.toastr.showError(error.error.message, error.error.status)
        // this.router.navigate(['/Employee/BloodGroups'])
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


// post response

// {
//   "status": true,
//   "message": "bloodGroup Created Successfully",
//   "error": "",
//   "items": {
//       "status": 1,
//       "_id": "60f6ce38ad9663001194705b",
//       "name": "O+",
//       "createdAt": "2021-07-20T13:23:04.955Z",
//       "updatedAt": "2021-07-20T13:23:04.955Z",
//       "__v": 0
//   }
// }


// list Response


// {
//   "status": true,
//   "message": "WorkExperiences",
//   "error": "",
//   "items": [
//       {
//           "status": 1,
//           "_id": "60f3e2e767a4952f4ca57ae3",
//           "name": "less  then 1 yr"
//       },
//       {
//           "status": 1,
//           "_id": "60f6bae73b82ae0011454ae3",
//           "name": "2",
//           "createdAt": "2021-07-20T12:00:39.331Z",
//           "updatedAt": "2021-07-20T12:00:39.331Z"
//       }
//   ]
// }
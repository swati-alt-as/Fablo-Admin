import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../services/Admin/employee/employee.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { SwalService } from '../../../services/notification/swal.service'
import { ToastrserviceService } from '../../../services/notification/toastrservice.service'

interface createEmpIDData {
  departmentCode: string,
  employeeType: string
}

interface createEmpData {
  name: string,
  contact: number,
  emergency_contact: number,
  email: number,
  dob: string,
  employee_code: string,
  password: string,
  employee_type: {
    id: string,
    name: string,
    code: string
  },
  department: {
    id: string,
    name: string,
    code: string
  },
  designation: {
    id: string,
    name: string,
    code: string
  },
  address: {
    current: string,
    postal: string
  },
  education: {
    id: string,
    name: string
  },
  work_experience: {
    id: string,
    name: string
  },
  blood_group: {
    id: string,
    name: string
  },
  account_details: {
    bank_name: string,
    bank_ifsc: string,
    account_number: string
  }
}

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {

  message: string;
  createEmpForm: FormGroup;
  result: any = {};
  res: any = {};

  createEmpList: any = {};
  page = 1;
  count = 0;
  pageSize = 10;
  pageSizes = [5, 10, 15];
  data: String;
  departmentCode: string;
  empTypeCode: string;
  bloodGroupList: any = {};
  departmentList: any = {};
  designationList: any = {};
  educationList: any = {};
  empTypeList: any = {};
  workExpList: any = {};


  constructor(private employee: EmployeeService, private router: Router, private swal: SwalService, private toastr: ToastrserviceService) { }

  ngOnInit(): void {
    this.createEmpForm = new FormGroup({
      name: new FormControl('', Validators.required),
      contact: new FormControl('', Validators.required),
      emergency_contact: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      dob: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      current: new FormControl('', Validators.required),
      postal: new FormControl('', Validators.required),
      bank_name: new FormControl('', Validators.required),
      bank_ifsc: new FormControl('', Validators.required),
      account_number: new FormControl('', Validators.required),
      bloodgroup: new FormControl('', Validators.required),
      department: new FormControl('', Validators.required),
      designation: new FormControl('', Validators.required),
      education: new FormControl('', Validators.required),
      empType: new FormControl('', Validators.required),
      workExp: new FormControl('', Validators.required),
    });

    this.employee.bloodGroupList().subscribe((result) => {
      if (!(result["items"].length === 0)) {
        this.bloodGroupList = result["items"];
      }
    })

    this.employee.departmentList().subscribe((result) => {
      if (!(result["items"].length === 0)) {
        this.departmentList = result["items"];
      }
    })

    this.employee.designationList().subscribe((result) => {
      if (!(result["items"].length === 0)) {
        this.designationList = result["items"];
      }
    })

    this.employee.educationList().subscribe((result) => {
      if (!(result["items"].length === 0)) {
        this.educationList = result["items"];
      }
    })

    this.employee.employeeTypeList().subscribe((result) => {
      if (!(result["items"].length === 0)) {
        this.empTypeList = result["items"];
      }
    })

    this.employee.workExperienceList().subscribe((result) => {
      if (!(result["items"].length === 0)) {
        this.workExpList = result["items"];
      }
    })

  }

  get f() {
    return this.createEmpForm.controls;
  }

  saveCreateEmp() {
    var departmentArray = this.createEmpForm.value["department"].split("+++");
    var designationArray = this.createEmpForm.value["designation"].split("+++");
    var educationArray = this.createEmpForm.value["education"].split("+++");
    var empTypeArray = this.createEmpForm.value["empType"].split("+++");
    var work_experienceArray = this.createEmpForm.value["workExp"].split("+++");
    var bloodgroupArray = this.createEmpForm.value["bloodgroup"].split("+++");
    this.departmentCode = departmentArray[2]
    this.empTypeCode = empTypeArray[2]
    let empIDPostData: createEmpIDData = {
      "departmentCode": this.departmentCode,
      "employeeType": this.empTypeCode,
    };
    this.employee.createEmployeeID(empIDPostData).subscribe((resultData) => {
      console.log(resultData)
      this.result = resultData;
      if (this.result["status"] == true) {
        localStorage.setItem("employee_code", this.result["items"]);
        let employeePostData: createEmpData = {
          "name": this.createEmpForm.value["name"],
          "contact": this.createEmpForm.value["contact"],
          "emergency_contact": this.createEmpForm.value["emergency_contact"],
          "email": this.createEmpForm.value["email"],
          "dob": this.createEmpForm.value["dob"],
          "employee_code": localStorage.getItem("employee_code"),
          "password": this.createEmpForm.value["password"],
          "employee_type": {
            "id": empTypeArray[0],
            "name": empTypeArray[1],
            "code": empTypeArray[2]
          },
          "department": {
            "id": departmentArray[0],
            "name": departmentArray[1],
            "code": departmentArray[2]
          },
          "designation": {
            "id": designationArray[0],
            "name": designationArray[1],
            "code": designationArray[2]
          },
          "address": {
            "current": this.createEmpForm.value["current"],
            "postal": this.createEmpForm.value["postal"]
          },
          "education": {
            "id": educationArray[0],
            "name": educationArray[1]
          },
          "work_experience": {
            "id": work_experienceArray[0],
            "name": work_experienceArray[1]
          },
          "blood_group": {
            "id": bloodgroupArray[0],
            "name": bloodgroupArray[1]
          },
          "account_details": {
            "bank_name": this.createEmpForm.value["bank_name"],
            "bank_ifsc": this.createEmpForm.value["bank_ifsc"],
            "account_number": this.createEmpForm.value["account_number"]
          }
        };
        console.log(employeePostData)
        this.employee.register(employeePostData).subscribe((response) => {
          console.log(response)
          this.res = response;
          if (this.res["status"] == true) {
            this.message = this.res["message"];
            this.toastr.showSuccess(this.message, "Done")
            this.router.navigate(['/Employee/EmployeeList'])
            setTimeout(() => {
              window.location.reload();
            }, 5000);
          } else if (this.res["status"] == false) {
            this.message = this.res["message"];
            this.toastr.showError(this.message, "Error!")
            setTimeout(() => {
              window.location.reload();
            }, 5000);
          } else {
            this.router.navigate(['/Employee/CreateEmployee'])
          }
        },
          (error: HttpErrorResponse) => {
        console.log(error)
        this.toastr.showError(error, "Error!")
            // setTimeout(() => {
            //   window.location.reload();
            // }, 5000);
          })
      } else if (this.result["status"] == false) {
        this.message = this.result["message"];
        this.toastr.showError(this.message, "Error!")
        // setTimeout(() => {
        //   window.location.reload();
        // }, 5000);
      } else {
        this.router.navigate(['/Employee/CreateEmployee'])
      }
    },
      (error: HttpErrorResponse) => {
        console.log(error)
        this.toastr.showError(error, "Error!")
        // setTimeout(() => {
        //   window.location.reload();
        // }, 5000);
      })
  }
}



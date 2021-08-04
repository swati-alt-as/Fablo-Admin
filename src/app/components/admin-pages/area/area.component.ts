import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../../services/Admin/Location/location.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrserviceService } from '../../../services/notification/toastrservice.service'
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

interface areaData{
  area_name : string
  city_name : string
  city_id : string
}

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss'],
  // add NgbModalConfig and NgbModal to the component providers
  providers: [NgbModalConfig, NgbModal]
})

export class AreaComponent implements OnInit {
 
  message: string;
  result: any = {};
  areaForm: FormGroup;

  activeAreaList: any = {};
  inactiveAreaList: any = {};
  cityList: any = {};
  page = 1;
  count = 0;
  pageSize = 5;
  pageSizes = [5, 10, 15];
  data: string;
  modalpage = 1;
  modalcount = 0;
  modalpageSize = 5;
  modalpageSizes = [5, 10, 15];
  modaldata: string;

  constructor(private location: LocationService, private router: Router, config: NgbModalConfig, private modalService: NgbModal, private toastr: ToastrserviceService) { 
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    
    this.areaForm = new FormGroup({
      area_name: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required)
    });

    this.location.activeCitiesList().subscribe((result) => {
      if (!(result["items"].length === 0)) {
        this.cityList = result["items"];
      }
    })

    // this.spinnerService.show();
    this.location.activeAreaList().subscribe((result) => {
      // this.spinnerService.hide();
      if (!(result["items"].length === 0)) {
        this.activeAreaList = result["items"];
        this.count = result["items"].length;
      }
    })
  }

  get f() {
    return this.areaForm.controls;
  }
  
  saveArea(){
    var cityArray = this.areaForm.value["city"].split("+++");
    let postData: areaData = {
      "area_name": this.areaForm.value["area_name"],
      "city_name": cityArray[1],
      "city_id": cityArray[0],
    };
    console.log(postData)
    this.location.addArea(postData).subscribe((resultData) => {
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
        this.router.navigate(['/Administrator/Area'])
        setTimeout(() => {
          window.location.reload();
        }, 5000);
      } else {
        this.router.navigate(['/Administrator/Area'])
      }
    },
      (error: HttpErrorResponse) => {
        this.toastr.showError(error.error.message, error.error.status)
      })
  }

  inactiveList(content) {
    this.location.inactiveAreaList().subscribe((result) => {
      // this.spinnerService.hide();
      if (result["status"] == true && !(result["items"].length === 0)) {
        this.message = result["message"];
        this.inactiveAreaList = result["items"];
        this.modalcount = result["items"].length;
        this.modalService.open(content);
      }else if (result["status"] == false) {
        this.message = result["message"];
        this.toastr.showError(this.message, "Error!")
        setTimeout(() => {
          window.location.reload();
        }, 5000);
      } else {
        this.message = result["message"];
        this.toastr.showError("No Data Found!", this.message)
      }
    },
    (error: HttpErrorResponse) => {
      this.toastr.showInfo(error.error.message, "Information!")
    })
 
  }

  activeStatusChange(dataAI){
    
    // this.spinnerService.show();
    this.location.makeActiveArea(dataAI.id).subscribe((res) => {
      // this.spinnerService.hide();
      if (res["status"] == true) {
        this.message = res["message"];
        this.toastr.showSuccess(this.message, "Done")
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else if (res["status"] == false) {
        this.message = res["message"];
        this.toastr.showError(this.message, "Error!")
        setTimeout(() => {
          window.location.reload();
        }, 5000);
      } else {
        setTimeout(() => {
          window.location.reload();
        }, 5000);
      }
    },
      (error: HttpErrorResponse) => {
        this.toastr.showError(error.error.message, "Error!")
      })
  }

  inactiveStatusChange(dataAI){
    
    // this.spinnerService.show();
    this.location.makeInactiveArea(dataAI.id).subscribe((res) => {
      // this.spinnerService.hide();
      if (res["status"] == true) {
        this.message = res["message"];
        this.toastr.showSuccess(this.message, "Done")
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else if (res["status"] == false) {
        this.message = res["message"];
        this.toastr.showError(this.message, "Error!")
        setTimeout(() => {
          window.location.reload();
        }, 5000);
      } else {
        setTimeout(() => {
          window.location.reload();
        }, 5000);
      }
    },
      (error: HttpErrorResponse) => {
        this.toastr.showError(error.error.message, "Error!")
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


  modalPageChange(event: number): void {
    this.modalpage = event;
    // this.inactiveList();
  }

  modalPageSizeChange(event: any): void {
    this.modalpageSize = event.target.value;
    this.modalpage = 1;
    // this.inactiveList();
  }

}

import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../../services/Admin/Location/location.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrserviceService } from '../../../services/notification/toastrservice.service'

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
  // add NgbModalConfig and NgbModal to the component providers
  providers: [NgbModalConfig, NgbModal]
})
export class CountriesComponent implements OnInit {
  
  message: string;
  result: any = {};
  activeCountriesList: any = {};
  inactiveCountriesList: any = {};
  page = 1;
  count = 0;
  modalpage = 1;
  modalcount = 0;
  modalpageSize = 5;
  modalpageSizes = [5, 10, 15];
  modaldata: string;
  pageSize = 5;
  pageSizes = [5, 10, 15];
  data: string;

  constructor(private location: LocationService, private router: Router, config: NgbModalConfig, private modalService: NgbModal, private toastr: ToastrserviceService) { 
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    
    // this.spinnerService.show();
    this.location.activeCountriesList().subscribe((result) => {
      // this.spinnerService.hide();
      if (!(result["items"].length === 0)) {
        this.activeCountriesList = result["items"];
        this.count = result["items"].length;
      }
    })
  }

  inactiveList(content) {
    this.location.inactiveCountriesList().subscribe((result) => {
      // this.spinnerService.hide();
      if (result["status"] == true && !(result["items"].length === 0)) {
        this.message = result["message"];
        this.inactiveCountriesList = result["items"];
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
        this.toastr.showError(this.message, "Error!")
      }
    },
    (error: HttpErrorResponse) => {
      this.toastr.showInfo(error.error.message, "Information!")
    })
 
  }

  activeStatusChange(data){
    
    // this.spinnerService.show();
    this.location.makeActiveCountry(data.id).subscribe((res) => {
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

  inactiveStatusChange(data){
    
    // this.spinnerService.show();
    this.location.makeInactiveCountry(data.id).subscribe((res) => {
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

import { Component, OnInit } from '@angular/core';
import { KycService } from '../../../../services/FabloFood/kyc/kyc.service';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { SwalService } from '../../../../services/notification/swal.service'
import { ToastrserviceService } from '../../../../services/notification/toastrservice.service'
import { data } from 'jquery';

import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-kyc-list',
  templateUrl: './kyc-list.component.html',
  styleUrls: ['./kyc-list.component.scss'],
  // add NgbModalConfig and NgbModal to the component providers
  providers: [NgbModalConfig, NgbModal]
})
export class KycListComponent implements OnInit {

  message: string;
  documents: any = {};
  result: any = {};

  kycList: any = {};
  approvedList: any = {};
  rejectedList: any = {};
  blockedList: any = {};
  page = 1;
  count = 0;
  pageSize = 10;
  pageSizes = [5, 10, 15];
  data: String;
  kycStatus: number;
  businessId: string;

  constructor(private kyc: KycService, private router: ActivatedRoute, private swal: SwalService, private toastr: ToastrserviceService, config: NgbModalConfig, private modalService: NgbModal) {
    this.router.paramMap.subscribe(params => {
      this.kycStatus = params["params"].kycStatus;
      this.ngOnInit();
    });

    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    // this.kycStatus = this.router.snapshot.params.kycStatus;
    // this.spinnerService.show();
    this.kyc.kycDetails(this.kycStatus).subscribe((result) => {
      // this.spinnerService.hide();x
      if (!(result["items"].length === 0)) {
        this.kycList = result["items"];
        this.count = result["items"].length;
      } else {
        this.kycList = result["items"];
        this.count = result["items"].length;
      }
    })
  }

  open(content, businessid) {
    this.kyc.kycDocuments(businessid).subscribe((res) => {
      // this.spinnerService.hide();
      if (res["status"] == true && !(res["items"].length === 0)) {
        this.message = res["message"];
        this.documents = res["items"];   
        this.modalService.open(content);     
      } else if (res["status"] == false) {
        this.message = res["message"];
        this.toastr.showError(this.message, "Error!")
        setTimeout(() => {
          window.location.reload();
        }, 5000);
      } else {
        this.toastr.showError("Something Went Wrong", "Error!")
      }
    },
      (error: HttpErrorResponse) => {
        this.toastr.showInfo(error.error.message, "Information!")
      })    
  }

  businessKycApprove(businessId) {
    // this.spinnerService.show();
    this.kyc.kycApprove(businessId).subscribe((res) => {
      // this.spinnerService.hide();
      if (res["status"] == true) {
        this.message = res["message"];
        this.toastr.showSuccess(this.message, "Done")
        setTimeout(() => {
          window.location.reload();
        }, 1000);
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
        this.toastr.showError(error, "Error!")
      })
  }

  businesskycBlock(businessId) {
    // this.spinnerService.show();
    this.kyc.kycBlock(businessId).subscribe((res) => {
      // this.spinnerService.hide();
      if (res["status"] == true) {
        this.message = res["message"];
        this.toastr.showSuccess(this.message, "Done")
        setTimeout(() => {
          window.location.reload();
        }, 1000);
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
        this.toastr.showError(error, "Error!")
      })
  }

  businesskycReject(businessId) {
    // this.spinnerService.show();
    this.kyc.kycReject(businessId).subscribe((res) => {
      // this.spinnerService.hide();
      if (res["status"] == true) {
        this.message = res["message"];
        this.toastr.showSuccess(this.message, "Done")
        setTimeout(() => {
          window.location.reload();
        }, 1000);
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
        this.toastr.showError(error, "Error!")
      })
  }

}

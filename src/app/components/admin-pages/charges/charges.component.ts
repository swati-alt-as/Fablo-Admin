import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/Admin/product/product.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { SwalService } from '../../../services/notification/swal.service'
import { ToastrserviceService } from '../../../services/notification/toastrservice.service'
import { environment } from '../../../../environments/environment'

interface chargesData {
  charge_name: string,
  charge_amount: number
  app_version: string
}

@Component({
  selector: 'app-charges',
  templateUrl: './charges.component.html',
  styleUrls: ['./charges.component.scss']
})
export class ChargesComponent implements OnInit {

  message: string;
  chargesForm: FormGroup;
  result: any = {};

  chargesList: any = {};
  page = 1;
  count = 0;
  pageSize = 5;
  pageSizes = [5, 10, 15];
  data: string;

  constructor(private product: ProductService, private router: Router, private swal: SwalService, private toastr: ToastrserviceService) { }

  ngOnInit(): void {
    this.chargesForm = new FormGroup({
      charge_name: new FormControl('', Validators.required),
      charge_amount: new FormControl('', Validators.required)
    });

    // this.spinnerService.show();
    this.product.chargesList().subscribe((result) => {
      // this.spinnerService.hide();
      if (!(result["items"].length === 0)) {
        this.chargesList = result["items"];
        this.count = result["items"].length;
      }
    })
  }

  get f() {
    return this.chargesForm.controls;
  }

  saveCharges() {
    let postData: chargesData = {
      "charge_name": this.chargesForm.value["charge_name"],
      "charge_amount": this.chargesForm.value["charge_amount"],
      "app_version": environment.app_version
    };
    this.product.addCharges(postData).subscribe((resultData) => {
      this.result = resultData;
      if (this.result["status"] == true) {
        this.message = this.result["message"];
        this.toastr.showSuccess(this.message, "Done")
        // this.swal.showSweetAlert("Done" , this.message, " ");
        setTimeout(() => {
          window.location.reload();
        }, 5000);
      } else if (this.result["status"] == false) {
        this.message = this.result["message"];
        this.toastr.showError(this.message, this.result["status"])
        this.router.navigate(['/administrator/charges'])
        setTimeout(() => {
          window.location.reload();
        }, 5000);
      } else {
        this.router.navigate(['/administrator/charges'])
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

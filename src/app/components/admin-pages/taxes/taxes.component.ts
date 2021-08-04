import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/Admin/product/product.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { SwalService } from '../../../services/notification/swal.service'
import { ToastrserviceService } from '../../../services/notification/toastrservice.service'
import { environment } from '../../../../environments/environment'

interface taxData {
  tax_name: string,
  tax_percent: number,
  app_version: string
}

@Component({
  selector: 'app-taxes',
  templateUrl: './taxes.component.html',
  styleUrls: ['./taxes.component.scss']
})
export class TaxesComponent implements OnInit {


  message: string;
  taxForm: FormGroup;
  result: any = {};

  taxList: any = {};
  page = 1;
  count = 0;
  pageSize = 5;
  pageSizes = [5, 10, 15];
  data: string;

  constructor(private product: ProductService, private router: Router, private swal: SwalService, private toastr: ToastrserviceService) { }

  ngOnInit(): void {
    this.taxForm = new FormGroup({
      tax_name: new FormControl('', Validators.required),
      tax_percent: new FormControl('', Validators.required)
    });

    // this.spinnerService.show();
    this.product.taxesList().subscribe((result) => {
      // this.spinnerService.hide();
      if (!(result["items"].length === 0)) {
        this.taxList = result["items"];
        this.count = result["items"].length;
      }
    })
  }

  get f() {
    return this.taxForm.controls;
  }

  saveTax() {
    let postData: taxData = {
      "tax_name": this.taxForm.value["tax_name"],
      "tax_percent": this.taxForm.value["tax_percent"],
      "app_version": environment.app_version
    };
    this.product.addTaxes(postData).subscribe((resultData) => {
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
        this.router.navigate(['/Administrator/Taxes'])
        setTimeout(() => {
          window.location.reload();
        }, 5000);
      } else {
        this.router.navigate(['/Administrator/Taxes'])
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

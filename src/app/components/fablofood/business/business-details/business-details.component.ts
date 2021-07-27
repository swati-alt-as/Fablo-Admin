import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../../../../services/FabloFood/Business/business.service';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { SwalService } from '../../../../services/notification/swal.service'
import { ToastrserviceService } from '../../../../services/notification/toastrservice.service'

@Component({
  selector: 'app-business-details',
  templateUrl: './business-details.component.html',
  styleUrls: ['./business-details.component.scss']
})
export class BusinessDetailsComponent implements OnInit {

  message: string;
  result: any = {};

  businessDetail: any = {};
  storesDetail: any = {};
  page = 1;
  count = 0;
  pageSize = 10;
  pageSizes = [5, 10, 15];
  data: String;

  constructor(private business: BusinessService, private router: ActivatedRoute, private swal: SwalService, private toastr: ToastrserviceService) { }

  ngOnInit(): void {
    let businessId = this.router.snapshot.params.businessid;
    // this.spinnerService.show();
    this.business.businessDetails(businessId).subscribe((result) => {
      // this.spinnerService.hide();
      if (!(result["items"].length === 0)) {
        this.businessDetail = result["items"];
        this.count = result["items"].length;
      }
    })

    // this.spinnerService.show();
    this.business.storesDetails(businessId).subscribe((response) => {
      // this.spinnerService.hide();
      if (!(response["items"].length === 0)) {
        this.storesDetail = response["items"];
        this.count = response["items"].length;
      }
    })
  }


}

import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../../../../services/FabloFood/Business/business.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { SwalService } from '../../../../services/notification/swal.service'
import { ToastrserviceService } from '../../../../services/notification/toastrservice.service'


@Component({
  selector: 'app-allbusiness-list',
  templateUrl: './allbusiness-list.component.html',
  styleUrls: ['./allbusiness-list.component.scss']
})
export class AllbusinessListComponent implements OnInit {

  message: string;
  result: any = {};

  businessList: any = {};
  page = 1;
  count = 0;
  pageSize = 10;
  pageSizes = [5, 10, 15];
  data: string;

  constructor(private business: BusinessService, private router: Router, private swal: SwalService, private toastr: ToastrserviceService) { }

  ngOnInit(): void {

    // this.spinnerService.show();
    this.business.allbusinessList().subscribe((result) => {
      // this.spinnerService.hide();
      if (!(result["items"].length === 0)) {
        this.businessList = result["items"];
        this.count = result["items"].length;
      }
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

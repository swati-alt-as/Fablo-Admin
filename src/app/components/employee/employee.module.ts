import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { BloodGroupComponent } from './blood-group/blood-group.component';
import { EducationComponent } from './education/education.component';
import { DesignationComponent } from './designation/designation.component';
import { DepartmentComponent } from './department/department.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { EmployeeTypeComponent } from './employee-type/employee-type.component';
import { SharedModule } from '../../theme/shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    EmployeeDetailsComponent,
    CreateEmployeeComponent,
    BloodGroupComponent,
    EducationComponent,
    DesignationComponent,
    DepartmentComponent,
    WorkExperienceComponent,
    EmployeeTypeComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    SharedModule
  ]
})
export class EmployeeModule { }

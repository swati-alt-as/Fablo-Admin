import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeDetailsComponent } from '../employee/employee-details/employee-details.component';
import { CreateEmployeeComponent } from '../employee/create-employee/create-employee.component';
import { BloodGroupComponent } from './blood-group/blood-group.component';
import { EducationComponent } from './education/education.component';
import { DesignationComponent } from './designation/designation.component';
import { DepartmentComponent } from './department/department.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { EmployeeTypeComponent } from './employee-type/employee-type.component';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: '',
      component: EmployeeDetailsComponent
    },
    {
      path: 'employeelist',
      component: EmployeeDetailsComponent
    },
    {
      path: 'createemployee',
      component: CreateEmployeeComponent
    },
    {
      path: 'bloodgroups',
      component: BloodGroupComponent
    },
    {
      path: 'educations',
      component: EducationComponent
    },
    {
      path: 'designations',
      component: DesignationComponent
    },
    {
      path: 'departments',
      component: DepartmentComponent
    },
    {
      path: 'workexperience',
      component: WorkExperienceComponent
    },
    {
      path: 'employeetype',
      component: EmployeeTypeComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }

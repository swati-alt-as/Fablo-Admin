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
      path: 'EmployeeList',
      component: EmployeeDetailsComponent
    },
    {
      path: 'CreateEmployee',
      component: CreateEmployeeComponent
    },
    {
      path: 'BloodGroups',
      component: BloodGroupComponent
    },
    {
      path: 'Educations',
      component: EducationComponent
    },
    {
      path: 'Designations',
      component: DesignationComponent
    },
    {
      path: 'Departments',
      component: DepartmentComponent
    },
    {
      path: 'WorkExperience',
      component: WorkExperienceComponent
    },
    {
      path: 'EmployeeType',
      component: EmployeeTypeComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }

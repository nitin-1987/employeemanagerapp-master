import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListEmployeeRoutingModule } from './list-employee-routing.module';
import { EmployeeComponent } from '../list-employee/employee/employee.component';
import { Employee1Component } from './employee1/employee1.component';

@NgModule({
  declarations: [EmployeeComponent, Employee1Component],
  exports: [
    EmployeeComponent

  ],
  imports: [
    CommonModule,
    ListEmployeeRoutingModule
  ]
})
export class ListEmployeeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { ListEmployeeRoutingModule } from '../list-employee-routing.module';


@NgModule({
  declarations: [EmployeeComponent],
  imports: [
    CommonModule,
    ListEmployeeRoutingModule
  ]
})
export class EmployeeModule { }

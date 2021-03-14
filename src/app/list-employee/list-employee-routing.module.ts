import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import {PageNotFoundComponent} from '../page-not-found/page-not-found.component';
import {AppComponent} from '../app.component';

const routes: Routes = [
  {
    path : '', component: EmployeeComponent
  },
  {
    path : 'home', component: AppComponent
  },
  {
    path : '404', component: PageNotFoundComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListEmployeeRoutingModule { }

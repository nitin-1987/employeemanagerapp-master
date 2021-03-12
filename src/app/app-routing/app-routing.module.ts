import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from '../page-not-found/page-not-found.component';
import { AppComponent } from '../app.component';


const routes: Routes = [
  {path : '', component: AppComponent},
  {path: 'employees', loadChildren : () => import('../list-employee/list-employee.module').then(m => m.ListEmployeeModule)},
  {path : '404', component: PageNotFoundComponent},
  {path : '**', component: PageNotFoundComponent},

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports : [ RouterModule ]
})
export class AppRoutingModule { }

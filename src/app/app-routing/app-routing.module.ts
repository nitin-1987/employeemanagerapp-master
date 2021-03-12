import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from '../page-not-found/page-not-found.component';
import { AppComponent } from '../app.component';

const routes: Routes = [
  {path : '', component: AppComponent},
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

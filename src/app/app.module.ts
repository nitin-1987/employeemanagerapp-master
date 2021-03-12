import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppStartComponent } from './app-start/app-start.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    AppStartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, FormsModule, AppRoutingModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppStartComponent]
})
export class AppModule { }

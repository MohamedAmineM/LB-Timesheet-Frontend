import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { HeaderHttpInterceptor } from './shared/interceptor/header-http.interceptor';
import { SingletonService } from './singleton.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';












@NgModule({
  declarations: [
    AppComponent,
    
  



   

  ],
  imports: [
    NgMultiSelectDropDownModule.forRoot(),
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    CommonModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),


  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:HeaderHttpInterceptor, multi: true},
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppModule } from 'src/app/app.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

import {RouterModule} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { AgGridModule } from 'ag-grid-angular';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
   

  ],
  imports: [

    FormsModule,ReactiveFormsModule,
    MatListModule,
    MatToolbarModule,
    HttpClientModule,
    NgMultiSelectDropDownModule.forRoot(),
    AgGridModule.withComponents([]),
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    CommonModule,
    RouterModule,

  ],
  exports:[ 
    HeaderComponent,
    FooterComponent,
    ],
  providers: [],
  bootstrap: []

})
export class SharedModule { }
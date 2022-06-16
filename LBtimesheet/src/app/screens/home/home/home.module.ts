import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

import {RouterModule} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { AgGridModule } from 'ag-grid-angular';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { SharedModule } from 'src/app/shared/shared.module';
import { ScreensRoutingModule } from './screens-routing.module';
import {MatDividerModule} from '@angular/material/divider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';





@NgModule({
  declarations: [
    HomeComponent,
   
    
    
    
    
    
    

  ],
  imports: [
    NgMultiSelectDropDownModule.forRoot(),
    FormsModule,ReactiveFormsModule,
    ScreensRoutingModule,
    SharedModule,
    MatDividerModule,
    MatListModule,
    MatToolbarModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    RouterModule.forChild([
        {
          path: '', component: HomeComponent
        }
      ]
    ),


  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }

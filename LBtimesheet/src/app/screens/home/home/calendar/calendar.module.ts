import { NgModule } from '@angular/core';
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
import { SharedModule } from 'src/app/shared/shared.module';

import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar.component';
import { RenderCalendarComponent } from './render-calendar/render-calendar.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ItemCalendarComponent } from './item-calendar/item-calendar.component';


@NgModule({
  declarations: [
    CalendarComponent,
    RenderCalendarComponent,
    ItemCalendarComponent,
    

  ],
  imports: [
    CommonModule,
    SharedModule,
    MatDialogModule,
    MatListModule,
    MatToolbarModule,
    HttpClientModule,
    AgGridModule.withComponents([RenderCalendarComponent]),
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,MatIconModule,
    RouterModule.forChild([
        {
          path: '', component: CalendarComponent
        }
      ]
    ),


  ],
  providers: [],
  bootstrap: [CalendarComponent]
})
export class CalendarModule { }

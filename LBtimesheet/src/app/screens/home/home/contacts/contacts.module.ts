import { NgModule ,NO_ERRORS_SCHEMA } from '@angular/core';
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
import { ContactsComponent } from './contacts.component';
import { RenderContactComponent } from './render-contact/render-contact.component';
import { CommonModule } from '@angular/common';
import { ItemContactComponent } from './item-contact/item-contact.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import {MatCardModule} from '@angular/material/card';
import {MatSliderModule} from '@angular/material/slider';
import {MatRadioModule} from '@angular/material/radio';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import {MatButtonToggleModule} from '@angular/material/button-toggle';









@NgModule({
  declarations: [
    ContactsComponent,
    RenderContactComponent,
    ItemContactComponent,

  ],
  

  imports: [
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSliderModule,
    MatCardModule,
    MatButtonToggleModule,





    MatNativeDateModule,
    CommonModule,
    SharedModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    ReactiveFormsModule,
    MatCheckboxModule,
    MatDialogModule,
    MatInputModule,
    MatListModule,
    MatDatepickerModule,
    MatToolbarModule,
    HttpClientModule,
    AgGridModule.withComponents([RenderContactComponent]),
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,MatIconModule,
    RouterModule.forChild([
        {
          path: '', component: ContactsComponent
        }
      ]
    ),


  ],
 
  providers: [],
  bootstrap: [ContactsComponent]
})
export class ContactsModule { }

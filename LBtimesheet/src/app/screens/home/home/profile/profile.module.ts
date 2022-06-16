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
import { ProfileComponent } from './profile.component';
import { RenderProfileComponent } from './render-profile/render-profile.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ItemProfileComponent } from './item-profile/item-profile.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [
    ProfileComponent,
    RenderProfileComponent,
    ItemProfileComponent,
    

  ],
  imports: [
    MatNativeDateModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
    CommonModule,
    SharedModule,
    MatDialogModule,
    MatListModule,
    MatToolbarModule,
    HttpClientModule,
    AgGridModule.withComponents([RenderProfileComponent]),
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    RouterModule.forChild([
        {
          path: '', component: ProfileComponent
        }
      ]
    ),


  ],
  providers: [],
  bootstrap: [ProfileComponent]
})
export class ProfileModule { }

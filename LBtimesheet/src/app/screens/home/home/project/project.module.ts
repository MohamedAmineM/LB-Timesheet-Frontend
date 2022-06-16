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
import { RenderProjectComponent } from './render-project/render-project.component';
import { ProjectComponent } from './project.component';
import { RenderTeamComponent } from './render-team/render-team.component';
import { ItemProjectComponent } from './item-project/item-project.component';
import { ItemTeamComponent } from './item-team/item-team.component';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';


@NgModule({
  declarations: [
    ProjectComponent,
    RenderProjectComponent,
    RenderTeamComponent,
    ItemProjectComponent,
    ItemTeamComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    MatDialogModule,
    MatNativeDateModule,
    NgMultiSelectDropDownModule.forRoot(),
    MatInputModule,
    MatCheckboxModule,
    FormsModule,ReactiveFormsModule,
    MatListModule,
    MatDatepickerModule,
    MatToolbarModule,
    HttpClientModule,
    AgGridModule.withComponents([RenderProjectComponent,RenderTeamComponent]),
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,MatIconModule,
    RouterModule.forChild([
        {
          path: '', component: ProjectComponent
        }
      ]
    ),


  ],
  providers: [],
  bootstrap: [ProjectComponent]
})
export class ProjectModule { }

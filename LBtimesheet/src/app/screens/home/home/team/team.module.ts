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
import { TeamComponent } from './team.component';
import { RenderTeamComponent } from './render-team/render-team.component';
import { RenderProjectComponent } from './render-project/render-project.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ItemProjectComponent } from './item-project/item-project.component';
import { ItemTeamComponent } from './item-team/item-team.component';


@NgModule({
  declarations: [
    TeamComponent,
    RenderTeamComponent,
    RenderProjectComponent,
    ItemProjectComponent,
    ItemTeamComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    MatListModule,
    MatToolbarModule,
    HttpClientModule,
    AgGridModule.withComponents([RenderTeamComponent,RenderProjectComponent]),
    MatDialogModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,MatIconModule,
    RouterModule.forChild([
        {
          path: '', component: TeamComponent
        }
      ]
    ),


  ],
  providers: [],
  bootstrap: [TeamComponent]
})
export class TeamModule { }

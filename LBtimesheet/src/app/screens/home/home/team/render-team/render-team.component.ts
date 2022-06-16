import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { ItemTeamComponent } from '../item-team/item-team.component';

@Component({
  selector: 'app-render-team',
  templateUrl: './render-team.component.html',
  styleUrls: ['./render-team.component.css']
})
export class RenderTeamComponent implements ICellRendererAngularComp {
  teamid = -1;
  params:any;
  constructor(public dialog: MatDialog) { }
  openDialog():void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    //dialogConfig.height = "60%";
    dialogConfig.width = "50%";
    this.dialog.open(ItemTeamComponent,dialogConfig);


  }







  refresh(params: ICellRendererParams): boolean {
    return true;
  }
  agInit(params: ICellRendererParams): void {
    this.params = params;
    if(this.params.value)
   this.teamid = this.params.value;
   console.log(this.teamid);
  }

  ngOnInit(): void {
  }

}

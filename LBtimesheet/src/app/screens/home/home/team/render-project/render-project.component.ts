import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,MatDialogConfig} from '@angular/material/dialog';
import { ItemProjectComponent } from '../item-project/item-project.component';

@Component({
  selector: 'app-render-project',
  templateUrl: './render-project.component.html',
  styleUrls: ['./render-project.component.css']
})
export class RenderProjectComponent implements ICellRendererAngularComp {
  projectid = -1;
  params:any;


  constructor(public dialog: MatDialog) { }
  openDialog():void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    //dialogConfig.height = "60%";
    dialogConfig.width = "50%";
    this.dialog.open(ItemProjectComponent,dialogConfig);


  }





  refresh(params: ICellRendererParams): boolean {
    return true              ;
  }
  agInit(params: ICellRendererParams): void {
    this.params = params;
    if(this.params.value)
   this.projectid = this.params.value;
   console.log(this.projectid);
  }

  ngOnInit(): void {
  }

}
